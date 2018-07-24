import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../store/data-store.service';
import {BroadcastService} from '../service/broadcast.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  checkNum: number;
  checkAllStatus = false;
  lastChecked: any;
  @ViewChild('checkbox') checkbox: ElementRef;


  constructor(public dataStore: DataStoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.sourceToTarget$.subscribe(data => {
      if (data) {
        this.checkNum = 0;
      }
    });
    this.broadcastService.lastCheck$.subscribe(data => {
      this.lastChecked = data;
    });
    this.broadcastService.deleteCheckAll$.subscribe(data => {
      this.checkAllStatus = !!data;
      this.checkbox.nativeElement.checked = this.checkAllStatus;
    });
  }

  changeCheckNum(num) {
    this.checkNum = num;
    if (num) {
      this.checkbox.nativeElement.checked = this.checkNum === this.dataStore.getAllData.length ? true : false;
    }
  }

  checkAll() {
    const allData = [];
    this.checkAllStatus = this.checkbox.nativeElement.checked;
    this.broadcastService.broadcastSourceCheckAll(this.checkAllStatus);
    this.checkNum = this.checkAllStatus ? this.dataStore.getAllData.length : 0;
    this.dataStore.getAllData.forEach(item => {
      allData.push(item);
    });
    this.lastChecked ? this.dataStore.setCheckData(this.checkAllStatus ? this.lastChecked.concat(allData) : []) : this.dataStore.setCheckData(this.checkAllStatus ? allData : []);
  }

}

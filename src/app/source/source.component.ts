import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('checkbox') checkbox: ElementRef;

  constructor(public dataStore: DataStoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
  }

  changeCheckNum(num) {
    this.checkNum = num;
    this.checkbox.nativeElement.checked = this.checkNum === this.dataStore.getAllData.length ? true : false;
  }

  checkAll() {
    this.checkAllStatus = this.checkbox.nativeElement.checked;
    this.broadcastService.broadcastSourceCheckAll(this.checkAllStatus);
    this.checkNum = this.checkAllStatus ? this.dataStore.getAllData.length : 0;
    this.dataStore.setCheckData(this.checkAllStatus ? this.dataStore.getAllData : []);
  }

}

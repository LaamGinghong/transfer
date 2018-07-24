import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../store/data-store.service';
import {BroadcastService} from '../service/broadcast.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  cancelNum: number;
  cancelAllStatus = false;
  lastCancel: any;
  @ViewChild('cancelBox') cancelBox: ElementRef;


  constructor(public dataStore: DataStoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.targetToSource$.subscribe(data => {
      if (data) {
        this.cancelNum = 0;
      }
    });
    this.broadcastService.lastCancel$.subscribe(data => {
      this.lastCancel = data;
    });
    this.broadcastService.deleteCancelAll$.subscribe(data => {
      this.cancelAllStatus = !!data;
      this.cancelBox.nativeElement.checked = this.cancelAllStatus;
    });
  }

  changeCancelNum(e) {
    this.cancelNum = e;
    if (e) {
      this.cancelBox.nativeElement.checked = this.cancelNum === this.dataStore.getTargetData.length ? true : false;
    }
  }

  cancelAll() {
    const targetData = [];
    this.cancelAllStatus = this.cancelBox.nativeElement.checked;
    this.broadcastService.broadcastTargetCancelAll(this.cancelAllStatus);
    this.cancelNum = this.cancelAllStatus ? this.dataStore.getTargetData.length : 0;
    this.dataStore.getTargetData.forEach(item => {
      targetData.push(item);
    });
    this.lastCancel ? this.dataStore.setCancelData(this.cancelAllStatus ? this.lastCancel.concat(targetData) : []) : this.dataStore.setCancelData(this.cancelAllStatus ? targetData : []);
  }
}

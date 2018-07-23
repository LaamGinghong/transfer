import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';
import {BroadcastService} from '../../service/broadcast.service';

@Component({
  selector: 'app-source-inner',
  templateUrl: './source-inner.component.html',
  styleUrls: ['./source-inner.component.css']
})
export class SourceInnerComponent implements OnInit {
  checkNum = 0;
  checkData = [];
  @ViewChildren('checkbox') checkbox: ElementRef;
  @Output() checkOutputNum = new EventEmitter<number>();

  constructor(public dataStore: DataStoreService, private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.checkOutputNum.emit(0);
    this.broadcastService.sourceCheckAll$.subscribe(data => {
      if (data) {
        this.checkNum = this.dataStore.getAllData.length;
        this.checkbox['_results'].forEach(item => {
          item.nativeElement.checked = true;
          this.dataStore.getAllData.forEach(val => {
            val['sourceChecked'] = item.nativeElement.checked;
          });
        });
        this.dataStore.getAllData.forEach(item => {
          this.checkData.push(item);
        });
      } else {
        this.checkNum = 0;
        this.checkbox['_results'].forEach(item => {
          item.nativeElement.checked = false;
          this.dataStore.getAllData.forEach(val => {
            val['sourceChecked'] = item.nativeElement.checked;
          });
        });
        this.checkData = [];
      }
      console.log(this.checkData);
    });
  }

  check(item: object, checkbox) {
    item['sourceChecked'] = checkbox.checked;
    item['sourceChecked'] ? this.checkNum++ : this.checkNum--;
    if (item['sourceChecked']) {
      this.checkData.forEach((val, index) => {
        if (val.id === item['id']) {
          this.checkData.splice(index, 1);
        }
      });
      this.checkData.push(item);
    } else {
      this.checkData.forEach((val, index) => {
        if (val.id === item['id']) {
          this.checkData.splice(index, 1);
        }
      });
    }
    this.checkOutputNum.emit(this.checkNum);
    this.dataStore.setCheckData(this.checkData);
  }
}

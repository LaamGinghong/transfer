import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChildren} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';

@Component({
  selector: 'app-target-inner',
  templateUrl: './target-inner.component.html',
  styleUrls: ['./target-inner.component.css']
})
export class TargetInnerComponent implements OnInit {
  checkNum = 0;
  checkData = [];
  @ViewChildren('checkbox') checkbox: ElementRef;
  @Output() checkOutputNum = new EventEmitter<number>();

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
  }

  check(item, checkbox) {
    item['targetChecked'] = checkbox.checked;
    item['targetChecked'] ? this.checkNum++ : this.checkNum--;
    if (item['targetChecked']) {
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
    this.dataStore.setCancelData(this.checkData);
  }
}

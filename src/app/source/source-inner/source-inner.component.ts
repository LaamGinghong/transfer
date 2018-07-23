import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';

@Component({
  selector: 'app-source-inner',
  templateUrl: './source-inner.component.html',
  styleUrls: ['./source-inner.component.css']
})
export class SourceInnerComponent implements OnInit {
  checkNum = 0;
  @ViewChildren('checkbox') checkbox: ElementRef;
  @Output() checkOutputNum = new EventEmitter<number>();

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
    this.checkOutputNum.emit(0);
  }

  check(item: object, checkbox) {
    item['sourceChecked'] = checkbox.checked;
    item['sourceChecked'] ? this.checkNum++ : this.checkNum--;
    this.checkOutputNum.emit(this.checkNum);
  }
}

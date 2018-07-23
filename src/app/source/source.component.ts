import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../store/data-store.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  checkNum: number;
  checkAllStatus = false;
  @ViewChild('checkbox') checkbox: ElementRef;

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
  }

  changeCheckNum(num) {
    this.checkNum = num;
    this.checkbox.nativeElement.checked = this.checkNum === this.dataStore.getAllData.length ? true : false;
  }

  checkAll() {
    this.checkAllStatus = this.checkbox.nativeElement.checked;
    // this.checkAllStatus = !this.checkAllStatus;
    this.checkNum = this.checkAllStatus ? this.dataStore.getAllData.length : 0;
  }
}

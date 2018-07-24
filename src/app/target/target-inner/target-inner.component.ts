import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChildren} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';
import {BroadcastService} from '../../service/broadcast.service';

@Component({
  selector: 'app-target-inner',
  templateUrl: './target-inner.component.html',
  styleUrls: ['./target-inner.component.css']
})
export class TargetInnerComponent implements OnInit {
  cancelNum = 0;
  cancelData = [];
  @ViewChildren('cancelBox') cancelBox: ElementRef;
  @Output() cancelOutputNum = new EventEmitter<number>();

  constructor(public dataStore: DataStoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.cancelOutputNum.emit(0);
    this.broadcastService.targetCancelAll$.subscribe(data => {
      if (data) {
        this.cancelNum = this.dataStore.getTargetData.length;
        this.cancelBox['_results'].forEach(item => {
          item.nativeElement.checked = true;
          this.dataStore.getTargetData.forEach(val => {
            val['targetChecked'] = item.nativeElement.checked;
          });
        });
        this.dataStore.getTargetData.forEach(item => {
          this.cancelData.push(item);
        });
      } else {
        this.cancelNum = 0;
        this.cancelBox['_results'].forEach(item => {
          item.nativeElement.checked = false;
          this.dataStore.getTargetData.forEach(val => {
            val['targetChecked'] = item.nativeElement.checked;
          });
        });
        this.cancelData = [];
      }
    });
  }

  cancel(item, checkbox) {
    item['targetChecked'] = checkbox.checked;
    item['targetChecked'] ? this.cancelNum++ : this.cancelNum--;
    if (item['targetChecked']) {
      this.cancelData.forEach((val, index) => {
        if (val.id === item['id']) {
          this.cancelData.splice(index, 1);
        }
      });
      this.cancelData.push(item);
    } else {
      this.cancelData.forEach((val, index) => {
        if (val.id === item['id']) {
          this.cancelData.splice(index, 1);
        }
      });
    }
    this.cancelOutputNum.emit(this.cancelNum);
    this.dataStore.setCancelData(this.cancelData);
  }
}

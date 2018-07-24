import {Component, OnInit} from '@angular/core';
import {DataStoreService} from './store/data-store.service';
import {BroadcastService} from './service/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [];

  constructor(public dataStore: DataStoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.initData();
    this.dataStore.setAllData(this.data);
  }

  initData() {
    for (let i = 1; i <= 10; i++) {
      const value = {
        id: i,
        content: `content${i}`,
        sourceChecked: false,
        targetChecked: false
      };
      this.data.push(value);
    }
  }

  selectToTarget() {
    const idBox = [];
    this.dataStore.setTargetData(this.dataStore.getCheckData);
    this.dataStore.getCheckData.forEach(item => {
      idBox.push(item['id']);
    });
    idBox.forEach(i => {
      this.dataStore.getAllData.forEach((item, index, arr) => {
        if (item.id === i) {
          arr.splice(index, 1);
        }
      });
    });
    this.broadcastService.broadcastLastChecked(this.dataStore.getCheckData);
    this.dataStore.setCheckData([]);
    this.broadcastService.broadcastSourceToTarget(true);
    this.broadcastService.broadcastDeleteCheckedAll(false);
  }

  returnToSource() {
    const idBox = [];
    this.dataStore.setAllData(this.dataStore.getCancelData);
    this.dataStore.getCancelData.forEach(item => {
      idBox.push(item['id']);
    });
    idBox.forEach(i => {
      this.dataStore.getTargetData.forEach((item, index, arr) => {
        if (item.id === i) {
          arr.splice(index, 1);
        }
      });
    });
    this.broadcastService.broadcastLastCancel(this.dataStore.getCancelData);
    this.dataStore.setCancelData([]);
    this.broadcastService.broadcastTargetToSource(true);
    this.broadcastService.broadcastDeleteCancelAll(false);
  }
}

import {Component, OnInit} from '@angular/core';
import {DataStoreService} from './store/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [];

  constructor(public dataStore: DataStoreService) {
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
    this.dataStore.setTargetData(this.dataStore.getCheckData);
    this.dataStore.getTargetData.forEach(item => {
      this.dataStore.getAllData.forEach((val, index) => {
        if (val['id'] === item['id']) {
          this.dataStore.getAllData.splice(index, 1);
        }
      });
    });
    this.dataStore.setCheckData([]);
  }
}

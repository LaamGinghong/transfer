import {Component, OnInit} from '@angular/core';
import {DataStoreService} from './store/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [];

  constructor(private dataStore: DataStoreService) {
  }

  ngOnInit() {
    this.initData();
    this.dataStore.setAllData(this.data);
  }

  initData() {
    for (let i = 1; i <= 20; i++) {
      const value = {
        id: i,
        content: `content${i}`,
        sourceChecked: false,
        targetChecked: false
      };
      this.data.push(value);
    }
  }
}

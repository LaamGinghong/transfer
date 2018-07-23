import {Injectable} from '@angular/core';
import {autorun, computed, action, observable} from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  @observable allData = [];

  constructor() {
    if (localStorage.allData) {
      this.allData = JSON.parse(localStorage.allData);
    }
    autorun(() => {
      localStorage.allData = JSON.stringify(this.allData);
    });
  }

  @computed get getAllData() {
    return this.allData;
  }

  @action setAllData(val) {
    this.allData = val;
  }
}

import {Injectable} from '@angular/core';
import {autorun, computed, action, observable} from 'mobx';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  @observable allData = [];
  @observable checkData = [];
  @observable targetData = [];

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

  @computed get getCheckData() {
    return this.checkData;
  }

  @action setCheckData(val) {
    this.checkData = val;
  }

  @computed get getTargetData() {
    return this.targetData;
  }

  @action setTargetData(val) {
    this.targetData = val;
  }
}

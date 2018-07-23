import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../store/data-store.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  checkNum = 0;

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
  }

}

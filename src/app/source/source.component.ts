import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../store/data-store.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';

@Component({
  selector: 'app-target-inner',
  templateUrl: './target-inner.component.html',
  styleUrls: ['./target-inner.component.css']
})
export class TargetInnerComponent implements OnInit {

  constructor(public dataStore: DataStoreService) {
  }

  ngOnInit() {
  }

}

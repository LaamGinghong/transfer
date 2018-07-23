import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  sourceCheckAll$ = new Subject();
  sourceToTarget$ = new Subject();
  lastCheck$ = new Subject();

  constructor() {
  }

  broadcastSourceCheckAll(content) {
    this.sourceCheckAll$.next(content);
  }

  broadcastSourceToTarget(content) {
    this.sourceToTarget$.next(content);
  }

  broadcastLastChecked(content) {
    this.lastCheck$.next(content);
  }
}

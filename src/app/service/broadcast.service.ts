import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  sourceCheckAll$ = new Subject();
  sourceToTarget$ = new Subject();
  lastCheck$ = new Subject();
  deleteCheckAll$ = new Subject();
  deleteCancelAll$ = new Subject();
  lastCancel$ = new Subject();
  targetToSource$ = new Subject();
  targetCancelAll$ = new Subject();

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

  broadcastDeleteCheckedAll(content) {
    this.deleteCheckAll$.next(content);
  }

  broadcastDeleteCancelAll(content) {
    this.deleteCancelAll$.next(content);
  }

  broadcastLastCancel(content) {
    this.lastCancel$.next(content);
  }

  broadcastTargetToSource(content) {
    this.targetToSource$.next(content);
  }

  broadcastTargetCancelAll(content) {
    this.targetCancelAll$.next(content);
  }
}

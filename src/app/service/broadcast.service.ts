import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  sourceCheckAll$ = new Subject();

  constructor() {
  }

  broadcastSourceCheckAll(content) {
    this.sourceCheckAll$.next(content);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  public _count = new BehaviorSubject<number>(0);

  constructor() { }

  public updateCount(count: number): void {
    this._count.next(count);
  }
}

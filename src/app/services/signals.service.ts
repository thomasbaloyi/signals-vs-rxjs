import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public count = signal(0);

  constructor() { }

  public updateCount(count: number): void {
    this.count.set(count);
  }
}

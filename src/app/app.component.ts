import { Component } from '@angular/core';
import { RxjsService } from './services/rxjs.service';
import { SignalsService } from './services/signals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signals-vs-rxjs';
  count = 0;

  constructor(private rxjsService: RxjsService, private signalsService: SignalsService) {}

  public update(): void {
    this.count++;
    if (this.count % 2 === 0) {
      this.rxjsService.updateCount(this.count);
      this.signalsService.updateCount(this.count);
    } else {
      this.signalsService.updateCount(this.count);
      this.rxjsService.updateCount(this.count);
    }
  }
}

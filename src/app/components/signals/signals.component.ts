import { Component } from '@angular/core';
import { SignalsService } from 'src/app/services/signals.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {

  constructor(public signalsService: SignalsService) { }

  
}

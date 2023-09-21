import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(public rxjsService: RxjsService) {}

  ngOnInit(): void {
      
  }
}

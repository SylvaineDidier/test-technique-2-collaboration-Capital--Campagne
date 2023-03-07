import { Component } from '@angular/core';
import { DatasService } from './services/datas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataServ: DatasService){

  }
}



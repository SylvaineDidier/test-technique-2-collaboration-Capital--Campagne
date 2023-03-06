import { Component } from '@angular/core';
import { DatasService } from './services/datas.service';
// import brands from './datas/brands.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private dataServ: DatasService){

  }
  brands = this.dataServ.Brands;
  campagnes = this.dataServ.Campagnes;
}

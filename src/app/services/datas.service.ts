import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DatasService {
  _brandURL = ENV.brandUrl;
  _payloadURL = ENV.payloadUrl;
  Brands: Array<any>;
  Campagnes: Array<any>;
  constructor(private http: HttpClient) {
    this.getBrands().subscribe(data => {
      this.Brands = data;
      console.log(this.Brands)
     });

     this.getCampagne().subscribe(data => {
      this.Campagnes = data;
      console.log(this.Campagnes)
     });
   }
  public getBrands(): Observable<any> {
    return this.http.get(this._brandURL);
  }

  public getCampagne(): Observable<any> {
    return this.http.get(this._payloadURL);
  }
}

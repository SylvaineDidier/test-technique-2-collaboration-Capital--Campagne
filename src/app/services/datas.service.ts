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
  constructor(private http: HttpClient) {}
  public getBrands(): Observable<any> {
    return this.http.get(this._brandURL);
  }

  public getCampagne(): Observable<any> {
    return this.http.get(this._payloadURL);
  }
}

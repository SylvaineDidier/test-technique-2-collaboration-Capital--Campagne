import { Component, OnInit, ViewChild } from '@angular/core';
import { DatasService } from './services/datas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  filterForm = this.fb.group({
    name: [],
    brand: []
  })
  constructor(private dataServ: DatasService, private fb: FormBuilder){}
  brands: Array<any>;
  campagnes: any ;

  displayedColumns: string[] = ['status', 'name', 'type', 'brand', 'submission'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  filterElt(){
    let result = this.campagnes.filter((elt: any)=>{ return elt.brand.brandId == this.filterForm.value.brand });
    this.dataSource = new MatTableDataSource(result) ;
    this.dataSource.paginator = this.paginator;
    console.log(result)
  }
  ngOnInit(): void {
    this.dataServ.getCampagne().subscribe(
      (data: any)=>{
        this.campagnes = data.requests;
        this.dataSource = new MatTableDataSource(data.requests) ;
        this.dataSource.paginator = this.paginator;
      }
    )

    this.dataServ.getBrands().subscribe((data) => {
      this.brands = data;
    })
    
  }

 
}



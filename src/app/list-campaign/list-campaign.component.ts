import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatasService } from '../services/datas.service';
import { Brand } from '../shared/models';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {

  filterForm = this.fb.group({
    name: [],
    brand: ['']
  })
  constructor(private dataServ: DatasService, private fb: FormBuilder){}
  brands: Array<Brand>;
  campagnes: any ;

  displayedColumns: string[] = ['status', 'name', 'type', 'brand', 'submission'];
  dataSource = new MatTableDataSource(this.dataServ.Campagnes);
  resultFordata

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /* Manager filters options */
  filterElt(){
    let result = this.campagnes.filter((elt: any)=>{ 
      if (this.filterForm.value.brand && this.filterForm.value.name) { // When all filters are filled
        return elt.brand.brandId == this.filterForm.value.brand && elt.campaignName.toLowerCase().indexOf(this.filterForm.value.name?.toLowerCase()) > -1
      } else if(this.filterForm.value.brand ) { //When brand is selected and name is empty
        return elt.brand.brandId == this.filterForm.value.brand;
      }else if(this.filterForm.value.name){// When name is setted and brand is empty
        return elt.campaignName.toLowerCase().indexOf(this.filterForm.value.name?.toLowerCase()) > -1
      }
      return true; // Else off all we return all datas
    });
    this.resultFordata = result;
    this.dataSource = new MatTableDataSource(result) ;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.dataServ.getCampagne().subscribe(
      (data: any)=>{
        this.campagnes = data.requests;
        this.resultFordata = this.campagnes;
        this.dataServ.Campagnes = this.campagnes;
        this.dataSource = new MatTableDataSource(data.requests) ;
        this.dataSource.paginator = this.paginator;
      }
    )

    this.dataServ.getBrands().subscribe((data) => {
      this.brands = data;
      this.dataServ.Brands = data;
    })
    
  }
}

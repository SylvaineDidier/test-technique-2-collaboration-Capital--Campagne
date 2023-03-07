import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../services/datas.service';
import { Media } from '../shared/models';

@Component({
  selector: 'app-update-campagne',
  templateUrl: './update-campagne.component.html',
  styleUrls: ['./update-campagne.component.scss']
})
export class UpdateCampagneComponent implements OnInit {
  updateForm = this.fb.group({
    brand: [null,Validators.required],
    campaignName: [null, Validators.required],
    media: [],
    decisionDeadline: [null, Validators.required],
  })
  currentCampaign;
  medias: Array<Media> = [
    {
        "mediaId": 1,
        "name": "LABELING_PACKAGING",
        "value": "Labeling/Packaging"
    },
    {
      "mediaId": 2,
      "name": "NEW_PRODUCT_INNOVATION",
      "value": "New Product/innovation"
    },
    {
      "mediaId": 3,
      "name": "OOH",
      "value": "OOH"
    },
    {
        "mediaId": 6,
        "name": "PROMOTIONS",
        "value": "Promotions"
    },
    {
        "mediaId": 7,
        "name": "RADIO",
        "value": "Radio"
    },
    {
      "mediaId": 12,
      "name": "COLLABORATION",
      "value": "Collaboration"
    },
    
  ]

  selectedMedia



  constructor(private fb: FormBuilder, public dataServ: DatasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataServ.getCampagne().subscribe(
      (data: any)=>{
        this.dataServ.Campagnes = data.requests;
        this.currentCampaign = this.dataServ.Campagnes.find(elt =>  {return elt.requestId ==  parseInt(this.route.snapshot.params['id'])});
        this.dataServ.Campagnes.forEach(element => {
        });
        this.medias.forEach(element => {
          element.checked = (this.currentCampaign.media.filter((elt)=>{return elt.mediaId == element.mediaId })).length > 0;
          
        });
        this.currentCampaign.brand= this.currentCampaign.brand.brandId;
        this.updateForm.patchValue(this.currentCampaign);


      }
    )
    
    
    
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { UpdateCampagneComponent } from './update-campagne/update-campagne.component';

const routes: Routes = [
  {path: '', component: ListCampaignComponent},
  {path: 'update/:id', component: UpdateCampagneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

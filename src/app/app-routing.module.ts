import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCampagneComponent } from './update-campagne/update-campagne.component';

const routes: Routes = [
  {path: 'update/:id', component: UpdateCampagneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

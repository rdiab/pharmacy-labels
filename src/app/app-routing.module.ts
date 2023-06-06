import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtiquetasPageComponent } from './etiquetas-page/etiquetas-page.component';

const routes: Routes = [
  {
    path: 'etiquetas',
    component: EtiquetasPageComponent
  },
  {
    path: '**',
    redirectTo: 'etiquetas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

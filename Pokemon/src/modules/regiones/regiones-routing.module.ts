import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRegionComponent } from './registrar-region/registrar-region.component';

const routes: Routes = [
  {path: "crear", component:RegistrarRegionComponent}
];

export const regionesRouting = RouterModule.forChild(routes)

@NgModule({
  imports: [regionesRouting],
  exports: [RouterModule]
})
export class RegionesRoutingModule { }

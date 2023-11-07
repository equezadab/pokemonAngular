import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionesRoutingModule } from './regiones-routing.module';
import { RegistrarRegionComponent } from './registrar-region/registrar-region.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegistrarRegionComponent
  ],
  imports: [
    CommonModule,
    RegionesRoutingModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class RegionesModule { }

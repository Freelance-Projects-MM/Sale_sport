import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { UploadFileComponent } from './file/upload-file/upload-file.component';
import { ListFilesComponent } from './file/list-files/list-files.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { AddUpdateProduitComponent } from './produits/add-update-produit/add-update-produit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FullCalendarModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    CalendrierComponent,
    UploadFileComponent,
    ListFilesComponent,
    ListProduitsComponent,
    AddUpdateProduitComponent
  ]
})
export class ComponentsModule { }

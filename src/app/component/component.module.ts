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
import { ListDepoComponent } from './depo/list-depo/list-depo.component';
import { AddEditDepotComponent } from './depo/add-edit-depot/add-edit-depot.component';
import { TierListComponent } from './tier/tier-list/tier-list.component';
import { AddEditTierComponent } from './tier/add-edit-tier/add-edit-tier.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { AddEditFactureComponent } from './facture/add-edit-facture/add-edit-facture.component';

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
    AddUpdateProduitComponent,
    ListDepoComponent,
    AddEditDepotComponent,
    TierListComponent,
    AddEditTierComponent,
    ListFactureComponent,
    AddEditFactureComponent
  ]
})
export class ComponentsModule { }

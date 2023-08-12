import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import {CalendrierComponent} from "./calendrier/calendrier.component";
import {UploadFileComponent} from "./file/upload-file/upload-file.component";
import {ListFilesComponent} from "./file/list-files/list-files.component";
import {ListDepoComponent} from "./depo/list-depo/list-depo.component";
import {AddEditDepotComponent} from "./depo/add-edit-depot/add-edit-depot.component";
import {TierListComponent} from "./tier/tier-list/tier-list.component";
import {AddEditTierComponent} from "./tier/add-edit-tier/add-edit-tier.component";
import {ListProduitsComponent} from "./produits/list-produits/list-produits.component";
import {AddUpdateProduitComponent} from "./produits/add-update-produit/add-update-produit.component";
import {ListFactureComponent} from "./facture/list-facture/list-facture.component";
import {AddEditFactureComponent} from "./facture/add-edit-facture/add-edit-facture.component";


export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'card',
        component: CardsComponent
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
      },
      {
        path: 'badges',
        component: BadgeComponent
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path:'calandrier',
        component : CalendrierComponent
      },
      {
        path:'importerDoc',
        component : UploadFileComponent
      },
      {
        path:'listDoc',
        component : ListFilesComponent
      } , {
        path:'depot',
        component : ListDepoComponent
      },
      {
        path:'AddDepot',
        component : AddEditDepotComponent
      },
      {
        path:'client',
        component : TierListComponent
      },
      {
        path:'addClient',
        component : AddEditTierComponent
      },
      {
        path:'produit',
        component : ListProduitsComponent
      }
      ,{
        path:'addProduits',
        component : AddUpdateProduitComponent
      },
      {
        path:'listFacture',
        component : ListFactureComponent
      },
      {
        path:'addFacture',
        component : AddEditFactureComponent
      }
    ]
  }
];

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
      }
		]
	}
];

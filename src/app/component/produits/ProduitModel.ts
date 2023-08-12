import {DepotModel} from "../depo/DepotModel";

export class ProduitModel {
  code?:string;
  libell?:string;
  prixVente?:number;
  quantite?:number;
  quantiteInitiale?:number;
  depot?:DepotModel={};
}

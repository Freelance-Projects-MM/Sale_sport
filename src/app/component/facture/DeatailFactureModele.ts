import {ProduitModel} from "../produits/ProduitModel";

export class DeatailFactureModele {
  id?:number;
  quantite?:number;
  prix?:number;
  produits?:ProduitModel;
  libelleProduit?:string;


}

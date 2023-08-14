import {TierModel} from "../tier/TierModel";
import {DeatailFactureModele} from "./DeatailFactureModele";

export class FactureModele {
  numero?: string;
  dateFacture?: string;
  statusFacture?: string;
  statusPaiementFacture?: string;
  prixTotale?: string;
  client?: TierModel={};
  detailFactures?: DeatailFactureModele[];

}

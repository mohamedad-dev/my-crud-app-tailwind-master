import { Scategorie } from "./scategorie";

export class Article {
  _id?: object;
  designation?: string;
  imageart?: string;
  marque?: string;
  prix?: number;
  qtestock?: number;
  reference?: string;
  scategorieID?: Scategorie;
  // scategorieID?: object;
}

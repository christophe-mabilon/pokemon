export interface Pokemon {
  number: number;
  name_En: string;
  name_Fr: string;
  img: string;
  alt: string;
  imgStyle: string;
  evolue_depuis: string;
  type1: string;
  type2?: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  specialeAttaque: number;
  specialDefense: number;
  speed: number;
}

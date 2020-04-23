export interface Subregion {
  id: string;
  iso2code: string;
  value: string;
}

export interface Continentalregions {
  id: string;
  code: string;
  iso2Code: string;
  name: string;
  region: Subregion;
  capitalCity: string;
  longitude: string;
  latitude: string;
}

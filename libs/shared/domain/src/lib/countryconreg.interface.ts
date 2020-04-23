export interface Subregionc {
  id: string;
  iso2code: string;
  value: string;
}

export interface Contrycr {
  id: string;
  iso2Code: string;
  name: string;
  region: Subregionc;
  adminregion: Subregionc;
  incomeLevel: Subregionc;
  lendingType: Subregionc;
  capitalCity: string;
  longitude: string;
  latitude: string;
}

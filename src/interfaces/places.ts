export interface PlaceResponse {
  suggestions: Suggestion[];
  attribution: string;
}

export interface Suggestion {
  name: string;
  mapbox_id: string;
  feature_type: string;
  place_formatted: string;
  context: Context;
  language: string;
  maki: string;
  metadata: Metadata;
  distance: number;
}

export interface Context {
  country: Country;
  region: Region;
  postcode?: Place;
  place?: Place;
  street?: Place;
}

export interface Country {
  id: string;
  name: string;
  country_code: string;
  country_code_alpha_3: string;
}

export interface Place {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  name: string;
  region_code: string;
  region_code_full: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Metadata {}

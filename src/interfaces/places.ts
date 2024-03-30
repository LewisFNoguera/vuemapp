export interface PlaceResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text_es: string;
  language_es?: Language;
  place_name_es: string;
  text: string;
  language?: Language;
  place_name: string;
  bbox?: number[];
  center: number[];
  geometry: Geometry;
  context?: Context[];
}

export interface Context {
  id: string;
  mapbox_id: string;
  text_es: string;
  text: string;
  wikidata?: string;
  language_es?: Language;
  language?: Language;
  short_code?: string;
}

export enum Language {
  Es = "es",
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  mapbox_id?: string;
  wikidata?: string;
  short_code?: string;
  foursquare?: string;
  landmark?: boolean;
  category?: string;
  address?: string;
}

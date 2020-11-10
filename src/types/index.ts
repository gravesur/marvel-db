export interface Character {
  id: number;
  name: string;
  description: string;
  img: string;
  comics: string;
  overview: string;
}

export interface EventSeriesComics {
  id: number;
  title: string;
  description: string;
  img: string;
  overview: string;
}

export type Item = Character | EventSeriesComics;

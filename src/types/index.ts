interface Character {
  id: any,
  name: any,
  description: any,
  img: any,
  comics: any,
  overview: any
}

interface EventSeriesComics {
  id: any,
  title: any,
  description: any,
  img: any,
  overview: any
}

export type Item = Character | EventSeriesComics;
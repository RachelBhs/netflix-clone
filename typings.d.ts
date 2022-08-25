// Doc https://www.typescriptlang.org/docs/handbook/intro.html => handbook

export interface Genre {
  id: number
  name: string
}

// info get from doc of themoviedb
export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string //optionnal when got "?"
  release_date?: string //optionnal when got "?"
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface Element {
  // can be all of this values ( | ==> ou )
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}
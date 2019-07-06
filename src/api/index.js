const key = 'api_key=79ce19b11f80253ec95757f195144888'

const baseUrl = `https://api.themoviedb.org/3`

export const nowPlaying = `${baseUrl}/movie/now_playing?${key}`

export const discover = `${baseUrl}/discover/movie?${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

export const topRated = `${baseUrl}/movie/top_rated?${key}&language=en-US&page=1`

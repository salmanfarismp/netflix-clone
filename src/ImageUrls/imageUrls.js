import {apiKey} from '../Constants/Constant'



export const apiBaseUrl='https://api.themoviedb.org/3'

export const trending =`/trending/all/week?api_key=${apiKey}&language=en-US`

export const action =`/discover/movie?api_key=${apiKey}&with_genres=28`

export const originals =`/discover/tv?api_key=${apiKey}&with_networks=213`

export const comedyMovies =`/discover/movie?api_key=${apiKey}&with_genres=35`

export const horrorMovies = `/discover/movie?api_key=${apiKey}&with_genres=27`

export const actionMovies = `/discover/movie?api_key=${apiKey}&with_genres=28`

export const romanceMovies = `/discover/movie?api_key=${apiKey}&with_genres=10749`

export const documentaries = `/discover/movie?api_key=${apiKey}&with_genres=99`
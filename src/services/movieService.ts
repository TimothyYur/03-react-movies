import axios, { type AxiosRequestConfig } from 'axios';
import type { Movie } from '../types/movie';

const VITE_TMDB_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA1ZGRmYjlkODVlMTJlMTJmZTRjODlmZmIwZjFiYiIsIm5iZiI6MTc4MTI0NDcwMC44MTksInN1YiI6IjZhMmJhMzFjMjllZWRlMDg3YWMyM2FlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eKGelx9gwb3pJJkSnUyamL-5_jtuzdze-FXToP1IWE';

interface TmdbSearchResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config: AxiosRequestConfig = {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  };

  const response = await axios.get<TmdbSearchResponse>(
    'https://api.themoviedb.org/3/search/movie',
    config
  );
  return response.data.results;
}

import axios, { type AxiosRequestConfig } from 'axios';
import type { Movie } from '../types/movie';

const my_key = import.meta.env.VITE_TMDB_TOKEN;

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
      Authorization: `Bearer ${my_key}`,
    },
  };

  const response = await axios.get<TmdbSearchResponse>(
    'https://api.themoviedb.org/3/search/movie',
    config
  );
  return response.data.results;
}

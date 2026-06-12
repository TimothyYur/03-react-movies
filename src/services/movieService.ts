import axios from 'axios';


const VITE_TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA1ZGRmYjlkODVlMTJlMTJmZTRjODlmZmIwZjFiYiIsIm5iZiI6MTc4MTI0NDcwMC44MTksInN1YiI6IjZhMmJhMzFjMjllZWRlMDg3YWMyM2FlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eKGelx9gwb3pJJkSnUyamL-5_jtuzdze-FXToP1IWE';
axios.defaults.headers.common['accept: application/json'] = VITE_TMDB_TOKEN;


export default async function fetchMoovies() {
    await axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', { params: {}, headers: { Authorization: VITE_TMDB_TOKEN, } })
        .then(response => console.log(response))
        .catch(error => console.log(error));
}

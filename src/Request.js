/** @format */

const API_KEY = "9e805d28194cc1b090d24aca4c9745ac";

const requestObject = {
  // your object properties
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAcionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requestObject;

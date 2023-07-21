const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.OMDB_API_KEY;

async function getMovieInfo(movieTitle) {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error.message);
    return null;
  }
}

async function main() {
  const movieTitle = 'The Shawshank Redemption'; // Replace this with the movie you want to search for

  const movieInfo = await getMovieInfo(movieTitle);

  if (movieInfo) {
    console.log('Movie Title:', movieInfo.Title);
    console.log('Year:', movieInfo.Year);
    console.log('Plot:', movieInfo.Plot);
    console.log('IMDB Rating:', movieInfo.imdbRating);
    console.log('Director:', movieInfo.Director);
    console.log('Actors:', movieInfo.Actors);
  } else {
    console.log('Movie not found.');
  }
}
main()
// module.exports = {main}

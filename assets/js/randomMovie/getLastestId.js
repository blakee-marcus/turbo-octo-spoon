

function getLatest () {
    const apiKey = require('dotenv').config();
    const apiURL = 'https://api.themoviedb.org/3/movie/latest?api_key=' + apiKey + '&language=en-US';

    let latestMovieId;

    const response = fetch(apiURL);

    if (response.ok) {
        console.log(response);
    } else {
        console.log(response.statusText);
    }
}

module.exports = getLatest;

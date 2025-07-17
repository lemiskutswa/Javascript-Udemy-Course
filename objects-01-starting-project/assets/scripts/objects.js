"use strict";
const movieBtn = document.getElementById('add-movie-btn');

const searchBtn = document.getElementById('search-btn');



const movies = [];

const renderMovies = (filter = '') => {
    const moviesList = document.getElementById('movie-list');
    
    if(movies.length === 0) {
        moviesList.classList.remove('visible');
        return;
    } else {
        moviesList.classList.add('visible');
    }

    moviesList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieElement = document.createElement('li');
        movieElement.textContent = movie.info.title;

        let { getFormattedTitle } = movie;

        //getFormattedTitle = getFormattedTitle.bind(movie);

        let text = getFormattedTitle.call(movie) + ' - '
        
        const { info, ...otherProps } = movie;
        console.log(otherProps);

        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }

        movieElement.textContent = text;
        moviesList.append(movieElement)

    });

}

const addMovieHandler = () => {
    const title = document.getElementById('title').value; //.value means we're only interested in the input, not the whole DOM node.
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
) {
    return;
}

const newMovie = {
    info: {
        title,//value and key name are the same.
        [extraName]: extraValue//Dynamic key name lets users choose the key name for the property.
    },
    id: Math.random(),
    getFormattedTitle() {
        console.log(this);
        return this.info.title.toUpperCase();
    }
};


movies.push(newMovie);
renderMovies();
};

const searchMovieHandler = () => {//Arrow functions don't know 'this'. So this here refers to the same thing outside the function.
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

movieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);



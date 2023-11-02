// 4. Movies

// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

// · "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
function movies(arr) {
  let allMovies = [];

  for (let task of arr) {
    if (task.includes("addMovie")) {
      let movieTitle = task.split("addMovie");
      let movie = { name: movieTitle[1].trim() };
      allMovies.push(movie);
    } else if (task.includes("directedBy")) {
      let [movieTitle, director] = task.split(" directedBy ");
      let findMovie = allMovies.find(
        (findMovie) => findMovie.name == movieTitle
      );
      if (findMovie) {
        findMovie.director = director;
      }
    } else if (task.includes("onDate")) {
      let [movieTitle, date] = task.split(" onDate ");
      let findMovie = allMovies.find(
        (findMovie) => findMovie.name == movieTitle
      );
      if (findMovie) {
        findMovie.date = date;
      }
    }
  }
  for (let movie of allMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie The Avengers",

  "addMovie Superman",

  "The Avengers directedBy Anthony Russo",

  "The Avengers onDate 30.07.2010",

  "Captain America onDate 30.07.2010",

  "Captain America directedBy Joe Russo",
]);

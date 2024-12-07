import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      title: 'Inception', 
      year: 2010, 
      description: 'Un thriller alucinante.',
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },

    {
      title: 'The Matrix', 
      year: 1999, 
      description: 'Un hacker descubre que la realidad es una simulación.',
      image: "https://pics.filmaffinity.com/Matrix-840465858-large.jpg"
    },

    {
      title: 'Interstellar', 
      year: 2014, 
      description: 'Un viaje a los confines del espacio.',
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRdlal-DyX1hbPmmSWSRl6Gv8Ev0v8Ugk71D-TakxV3KPFwrojG05f4jLsgL1tcb1QgwXha9hzCPp73wvAzHJ7ZbQ6PWCuTzQHmXTVz6XDNmSlLi7hNjYxH_BcOMY1sma-nW5oIS-HZsB1/s800/interstellar-imax-movie-poster.jpg"
    },

    {
      title: 'The Dark Knight', 
      year: 2010, 
      description: 'Batman enfrenta su mayor desafío hasta el momento cuando el Joker emerge para causar estragos en Ciudad Gótica.',
      image: "https://pics.filmaffinity.com/the_dark_knight-102763119-mmed.jpg"
    },

    {
      title: "Avengers: Endgame",
      year: 2019,
      description: "Los Vengadores se reúnen una última vez para deshacer el daño causado por Thanos.",
      image: "https://pics.filmaffinity.com/avengers_endgame-433595831-large.jpg"
    },

    {
      title: "Toy Story",
      year: 1995,
      description: "Un muñeco de vaquero se ve amenazado por la llegada de un nuevo juguete espacial en este clásico cuento animado.",
      image: "https://pics.filmaffinity.com/Toy_Story-609332037-large.jpg"
    },

    {
      title: "Jurassic Park",
      year: 1993,
      description: "Los dinosaurios vagan nuevamente por la Tierra en esta emocionante aventura ambientada en un parque de diversiones que salió mal.",
      image: "https://pics.filmaffinity.com/Parque_Juraasico_Jurassic_Park-214895994-large.jpg"
    },

    {
      title: "Forrest Gump",
      year: 1994,
      description: "La historia de un hombre con un coeficiente intelectual bajo que logra cosas increíbles a pesar de los desafíos de la vida.",
      image: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg"
    },

    {
      title: "The Lion King",
      year: 1994,
      description: "Un joven príncipe león es expulsado de su manada por su cruel tío y debe encontrar el camino de regreso para reclamar su reino.",
      image: "https://pics.filmaffinity.com/El_rey_leaon-585151708-large.jpg"
    },

    {
      title: "Titanic",
      year: 1997,
      description: "Una historia de amor se desarrolla entre Jack y Rose a bordo del desafortunado RMS Titanic.",
      image: "https://pics.filmaffinity.com/Titanic-816756810-large.jpg"
    },

  ] 

  getMovies(){
    return this.movies
  }
}

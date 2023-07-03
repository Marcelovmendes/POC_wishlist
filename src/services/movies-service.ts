import * as moviesRepository from "../repositories/movies-repository";
import { movieType } from "../protocols/protocols";
import { notFoundError } from "../errors/not-found-error";
import { notWatchedError } from "../errors/not-watched-error"; 
export  async function getMovies (){
 const movies =  await moviesRepository.getMovies()

 if(!movies || movies.length === 0 ){
    throw notFoundError();
 }
 return movies;

}

export async function postMovie(movie: movieType){
 

 const result = await moviesRepository.postMovie(movie)

 return result;

}

export async function findMovies(id:number){

 const movie = await moviesRepository.findMoviesById(id)
    console.log("movie",movie)
 if(!movie || movie.length === 0 || movie[0] === undefined){
    throw notFoundError();
 }
 return movie;
}
export async function updateMovie(id: number, updates: Partial<movieType>){
  const {status} = updates
  console.log('status',status)
  if (status === 'Não assitido' ) {
    throw notWatchedError();
  }
    const result = await moviesRepository.updateMovieById(id, updates)
    return result;
}

export async function getCountMovies(){

  const result = await  moviesRepository.getCountMoviesByPlataform()
 if (!result || result.length === 0){
    throw notFoundError();
 }
  return result;
}

export async function deleteMovie(id: number): Promise<void> {
  const result = await moviesRepository.deleteMovieById(id);
  if (!result.rowCount) {
    throw notFoundError();
  }
}
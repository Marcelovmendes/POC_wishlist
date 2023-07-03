import { movieType, CountPlataform } from "../protocols/protocols";
import db from "../database/dataBase";


export async function getMovies(){
 const query = "SELECT * FROM movies"
 const resultQuery = await db.query(query)

 const result: movieType[]= resultQuery.rows

 return result
}
export async function postMovie(movie: movieType){
const query = "INSERT INTO movies (nome, plataforma, genero, status, nota, resumo) VALUES ($1, $2, $3, $4, $5, $6)"  

const value =  [
    movie.nome,
    movie.plataforma,
    movie.genero,
    movie.status || "Não assistido",
    movie.nota || null, 
    movie.resumo || null,
]
const result = await db.query(query, value) 
return result
}
export async function findMoviesById(id: number) {
    const query = "SELECT * FROM movies WHERE id = $1";
    const value = [id];
    const resultQuery = await db.query(query, value);
    const result: movieType[] = resultQuery.rows;
    return result;
  }


export async function updateMovieById(id: number, updates: Partial<movieType>){
    
    const query = "UPDATE movies SET resumo = $1, status = $2, nota = $3 WHERE id = $4";
    const values = [
        updates.resumo || null,
        updates.status || 'Assistido',
        updates.nota || null,
        id
    ]
    const result = await db.query(query, values);
    return result;
}
export async function getCountMoviesByPlataform(): Promise<CountPlataform[]> {
  const query = "SELECT plataforma, COUNT(*) as total FROM movies GROUP BY plataforma ORDER BY total DESC";
  const resultQuery = await db.query(query);

  const result: CountPlataform[] = resultQuery.rows;
  return result;
}
   
export async function deleteMovieById(id: number) {
    const query = "DELETE FROM movies WHERE id = $1";
    const value = [id];
    const result = await db.query(query, value);

    return result;
  } 
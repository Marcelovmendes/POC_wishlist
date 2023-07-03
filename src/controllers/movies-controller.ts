import { Request, Response } from "express";
import httpStatus from "http-status"; 
import { movieType } from "../protocols/protocols";
import * as moviesService from "../services/movies-service";
import { notFoundError } from "../errors/not-found-error";

 export async function getMovies(req:Request, res:Response) {
 try{
    const result = await moviesService.getMovies()
    res.status(httpStatus.OK).send(result);
 }catch(err){
   if(err === notFoundError()){
    res.sendStatus(httpStatus.NOT_FOUND);
   }
  res.sendStatus(httpStatus.BAD_REQUEST);
 }
}
 
export async function postMovie(req:Request, res:Response) {
    const {nome,plataforma, genero} = req.body ;
 try{
    const result = await moviesService.postMovie( {nome,plataforma,genero}  as movieType)
    res.sendStatus(httpStatus.OK);
 }catch(err){
  console.log(err)
  res.sendStatus(httpStatus.BAD_REQUEST);
 }
}
export async function  findMovie(req:Request, res:Response) {
 const {id} = req.params; 
 const numericId: number = Number(id);
 try{
    const result = await moviesService.findMovies(numericId) 
    res.status(httpStatus.OK).send(result);
    
 }
 catch(err){
  res.sendStatus(httpStatus.BAD_REQUEST);
 }
}

export  async function updateMovie(req:Request, res:Response) {
  const {id} = req.params; 
  const numericId: number = Number(id);
  const {resumo,status,nota} = req.body;
  try{
    const resul = await moviesService.updateMovie(numericId,{resumo,status,nota} as Partial<movieType>)
    res.sendStatus(httpStatus.OK);
  }catch(err){
    console.log(err)
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getCountMoviesByPlataform( req:Request, res:Response) {
  try{
    const result = await moviesService.getCountMovies()
    res.status(httpStatus.OK).send(result);

  }catch(err){
    console.log(err)
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function deleteMovieById( req:Request, res:Response) {
  const {id} = req.params; 
  const numericId: number = Number(id);
  try{
    const result = await moviesService.deleteMovie(numericId)
    res.sendStatus(httpStatus.OK);
  }catch(err){
    console.log(err)
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}


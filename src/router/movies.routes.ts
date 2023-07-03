import { Router } from "express";
import * as moviesController from "../controllers/movies-controller";
import validateSchema   from "../middleware/validateSchemas.middleware";
import { schemaMovie, schemaUpdate } from "../schemas/movies-schemas";


const moviesRouter = Router();  

moviesRouter.get("/movies", moviesController.getMovies)
moviesRouter.post("/movies", validateSchema(schemaMovie),moviesController.postMovie)
moviesRouter.get("/movies/:id", moviesController.findMovie)
moviesRouter.put("/movies/:id",validateSchema(schemaUpdate), moviesController.updateMovie)
moviesRouter.get("/moviescount",moviesController.getCountMoviesByPlataform)
moviesRouter.delete("/movies/:id", moviesController.deleteMovieById)

export default moviesRouter
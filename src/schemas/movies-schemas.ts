import Joi from "joi";
import { movieType,updateType } from "../protocols/protocols";

 export const schemaMovie = Joi.object<movieType>({
    nome: Joi.string().required(),
    plataforma: Joi.string().required(),
    genero: Joi.string().required(),
    status: Joi.string(),
    nota: Joi.number().allow(null),
    resumo: Joi.string().allow(null),
})
export const schemaUpdate = Joi.object<updateType>({
    
    resumo: Joi.string().allow(null),
    status: Joi.string(),
    nota: Joi.number().allow(null),
})
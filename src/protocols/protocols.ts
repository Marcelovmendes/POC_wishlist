export type ApplicationError = {
    name: string;
    message: string;
  };
export type movieType ={
    nome: string;
    plataforma: string; 
    genero:string;
    status?: string;
    nota?: number | null;
    resumo?: string | null;
}

export type CountPlataform = {
    plataforma: string;
    total: number
}

export type updateType = {
    resumo?: string | null;
    status?: string | null;
    nota?: number | null;
}
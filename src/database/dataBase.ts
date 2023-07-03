import pg from "pg";
import "dotenv/config.js";

const { Pool } = pg;

const dbConfiguration = {
  connectionString: process.env.DATABASE_URL
};

const db = new Pool(dbConfiguration);


export default db;
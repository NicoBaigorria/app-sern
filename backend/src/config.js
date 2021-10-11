import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "naics",
  password: process.env.DB_PASSWORD || "Naics111194",
  database: process.env.DB_DATABASE || "tasksdb",
};

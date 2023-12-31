import { DataSource } from "typeorm"
import "dotenv/config"
import path from "path"

const isProduction = process.env.NODE_ENV === "production"
const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: isProduction
    ? {
        rejectUnauthorized: false,
      }
    : false,
  synchronize: false,
  logging: isProduction ? false : true,
  entities: [path.join(__dirname, "./entities/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/*.{js,ts}")],
})

export default AppDataSource

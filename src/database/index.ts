import { Sequelize } from "sequelize";
import { SequlizeAdapter } from "../lib/adapters/sequilize";
import { Database } from "../lib/database";
import 'dotenv/config'
import { ModelsType } from "./types";

const sequilizeORM = new Database<Sequelize, ModelsType>(new SequlizeAdapter(new Sequelize(
    process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
    host: 'localhost',
    dialect: 'postgres'
}
)))

export default sequilizeORM
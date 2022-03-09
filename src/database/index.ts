import { Sequelize } from "sequelize";
import { SequlizeAdapter } from "../lib/adapters/sequilize";
import { Database } from "../lib/database";
import 'dotenv/config'

const sequilizeORM = new Database(new SequlizeAdapter(new Sequelize(
    process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
    host: 'localhost',
    dialect: 'postgres'
}
)))

export default sequilizeORM
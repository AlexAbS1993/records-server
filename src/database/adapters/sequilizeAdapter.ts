import { SequlizeAdapter } from "../../lib/adapters/sequilize";
import { Sequelize } from "sequelize";

export default new SequlizeAdapter(new Sequelize(
    process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
    host: 'localhost',
    dialect: 'postgres'
}
))
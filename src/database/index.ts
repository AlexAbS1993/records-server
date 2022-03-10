import { DataTypes, Model, Sequelize } from "sequelize";
import { SequlizeAdapter } from "../lib/adapters/sequilize";
import { Database } from "../lib/database";
import 'dotenv/config'
import { ModelsType, RecordType, UserModelType } from "./types";
import { userDataGetterSequilize } from './selectors/getters/user.getter';

const sequilizeORM = new Database<Sequelize, ModelsType>(new SequlizeAdapter(new Sequelize(
    process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
    host: 'localhost',
    dialect: 'postgres'
}
)))

// sequilizeORM.createModels({
//     User: sequilizeORM.use()!.db.define<Model<UserModelType>>("User", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: DataTypes.STRING
//     }
//     ),
//     Record: sequilizeORM.use()!.db.define<Model<RecordType>>("Record", {
//         id: DataTypes.NUMBER,
//         discription: DataTypes.STRING
//     }
//     )
// })


export default sequilizeORM
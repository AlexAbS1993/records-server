import { DataTypes, Model, Sequelize } from "sequelize";
import { SequlizeAdapter } from "../lib/adapters/sequilize";
import { Database } from "../lib/database";
import 'dotenv/config'
import { ModelsType, RecordType, UserModelType } from "./types";
import { userDataGetterSequilize } from './selectors/getters/user.getter';

async function sequilizeORMFunc() {
    const sequilizeORM = new Database<Sequelize, ModelsType>(new SequlizeAdapter(new Sequelize(
        process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
        host: 'localhost',
        dialect: 'postgres'
    }
    )))
    await sequilizeORM.createModels({
        User: sequilizeORM.use()!.db.define<Model<UserModelType>>("User", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
        }, {
            timestamps: false
        }
        ),
        Record: sequilizeORM.use()!.db.define<Model<RecordType>>("Record", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            discription: DataTypes.STRING
        }, {
            timestamps: false
        }
        )
    })

    return sequilizeORM
}

// const sequilizeORM = new Database<Sequelize, ModelsType>(new SequlizeAdapter(new Sequelize(
//     process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
//     host: 'localhost',
//     dialect: 'postgres'
// }
// )))

// const models = sequilizeORM.createModels({
//     User: sequilizeORM.use()!.db.define<Model<UserModelType>>("User", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: DataTypes.STRING,
//     }, {
//         timestamps: false
//     }
//     ),
//     Record: sequilizeORM.use()!.db.define<Model<RecordType>>("Record", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         discription: DataTypes.STRING
//     }, {
//         timestamps: false
//     }
//     )
// })

// let user = sequilizeORM.getData(new userDataGetterSequilize(sequilizeORM.models!.User), {
//     attributes: ['name'],
//     where: {
//         name: "Alex"
//     }
// }, 'one')


export default sequilizeORMFunc()
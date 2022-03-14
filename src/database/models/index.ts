import { ModelsType, UserModelType, RecordType } from "../types"
import { Database } from "../../lib/database"
import { Sequelize, Model, DataTypes } from "sequelize"

function createModelsForSequilize(sequilizeORM: Database<Sequelize, ModelsType>) {
    return {
        // User Model
        User: sequilizeORM.use()!.db.define<Model<UserModelType>>("User", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            mail: {
                type: DataTypes.STRING
            },
            login: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            timestamps: false
        }
        ),
        //Record Model
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
    }
}

export default createModelsForSequilize
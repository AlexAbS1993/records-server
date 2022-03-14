import { Sequelize } from "sequelize";
import SequlizeAdapter from './adapters/sequilizeAdapter'
import { Database } from "../lib/database";
import 'dotenv/config'
import { ModelsType } from "./types";
import createModelsForSequilize from "./models";

async function sequilizeORMFunc() {
    const sequilizeORM = new Database<Sequelize, ModelsType>(SequlizeAdapter)
    await sequilizeORM.createModels(createModelsForSequilize(sequilizeORM))
    return sequilizeORM
}

export default sequilizeORMFunc()
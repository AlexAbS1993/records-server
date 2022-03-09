import { Sequelize } from 'sequelize';
import { Application } from './app';
import 'dotenv/config'
import { Database } from './database';
import { SequlizeAdapter } from './adapters/sequilize';

new Application<SequlizeAdapter>()
    .defineDataBase(new Database(new SequlizeAdapter(new Sequelize(
        process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
        host: 'localhost',
        dialect: 'postgres'
    }
    )))).db.connect()
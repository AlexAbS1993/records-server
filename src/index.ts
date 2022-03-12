import { DataTypes, Sequelize } from 'sequelize';
import { Application } from './lib/app';
import 'dotenv/config'
import sequilizeORM from './database';
import { SequlizeAdapter } from './lib/adapters/sequilize';
import express from 'express'
import { UserModelType } from './database/types';
import { userDataGetterSequilize } from './database/selectors/getters/user.getter';

async function start() {
    let app = new Application()
    let seqORM = await sequilizeORM
    await app.defineDataBase(seqORM)
    await app.db!.connect('test')
    await seqORM.models?.User.create({
        name: "Alex"
    })
    let user = await seqORM.getData(new userDataGetterSequilize(seqORM.models!.User), {
        attributes: ['name'],
        where: {
            name: "Alex"
        }
    }, 'one')
    console.log(user.name)
}

start()


//settings
// Application.getDB<SequlizeAdapter>().db.define("User", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     }
// })



// Application.getDB<SequlizeAdapter>().connect(process.env.NODE_ENV as "development" | "test")
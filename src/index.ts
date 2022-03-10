import { DataTypes, Sequelize } from 'sequelize';
import { Application } from './lib/app';
import 'dotenv/config'
import sequilizeORM from './database';
import { SequlizeAdapter } from './lib/adapters/sequilize';
import express from 'express'


// new Application<>()


// app.db!.connect(process.env.NODE_ENV as "development" | "test")

//settings
// Application.getDB<SequlizeAdapter>().db.define("User", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     }
// })



// Application.getDB<SequlizeAdapter>().connect(process.env.NODE_ENV as "development" | "test")
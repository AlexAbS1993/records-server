import { Sequelize, DataTypes } from 'sequelize';
export function fakeModels(db: Sequelize) {
    let User = db.define("User", {
        name: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
    return {
        User
    }
}
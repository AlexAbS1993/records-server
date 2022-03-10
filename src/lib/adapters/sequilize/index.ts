import { DatabaseAdapterInterface } from './../../../interfaces/DatabaseAdapterInterface';
import { Sequelize } from 'sequelize';
export class SequlizeAdapter implements DatabaseAdapterInterface<Sequelize> {
    public db: Sequelize
    constructor(db: Sequelize) {
        this.db = db
    }
    async connect(mode: "development" | "production" | "test") {
        try {
            await this.db.authenticate()
            if (mode === 'test') {
                await this.db.sync({ force: true })
            }
            if (mode === 'development') {
                await this.db.sync({ alter: true })
            }
            console.log("Подключение успешно завершено")
        }
        catch (e) {
            console.log('Не подключились')
        }
    }
}
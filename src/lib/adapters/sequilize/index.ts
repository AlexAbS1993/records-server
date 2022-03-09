import { DatabaseAdapterInterface } from './../../../interfaces/DatabaseAdapterInterface';
import { Sequelize } from 'sequelize';
export class SequlizeAdapter implements DatabaseAdapterInterface<Sequelize> {
    public db: Sequelize
    constructor(db: Sequelize) {
        this.db = db
    }
    connect(mode: "development" | "production" | "test") {
        try {
            this.db.authenticate()
            if (mode === 'test') {
                this.db.sync({ force: true })
            }
            if (mode === 'development') {
                this.db.sync({ alter: true })
            }
            console.log("Подключение успешно завершено")
        }
        catch (e) {
            console.log('Не подключились')
        }
    }
    defineModel() {

    }
}
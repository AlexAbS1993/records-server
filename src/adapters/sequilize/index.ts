import { Sequelize } from 'sequelize';
export class SequlizeAdapter {
    db: Sequelize
    constructor(db: Sequelize) {
        this.db = db
    }
    connect() {
        try {
            this.db.authenticate()
            console.log("Подключение успешно завершено")
        }
        catch (e) {
            console.log('Не подключились')
        }
    }
}
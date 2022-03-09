import { Database } from "./database"

export class Application<DBtype> {
    private _db: DBtype | null = null
    protected static singletone: any | null = null
    constructor() {
        if (Application.singletone === null) {
            Application.singletone = this
            return
        }
        return Application.singletone
    }
    defineDataBase(db: Database<DBtype>) {
        this._db = db.use() as DBtype
        return this
    }
    get db() {
        return this._db
    }
    static getDB() {
        if (Application.singletone._db === null) {
            throw new Error("База данных не подключена")
        }
        return Application.singletone._db
    }
}
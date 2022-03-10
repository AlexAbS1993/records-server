import { DatabaseAdapterInterface } from "../interfaces/DatabaseAdapterInterface"
import { Database } from "./database"

export class Application<DBtype, COREtype> {
    private _db: DatabaseAdapterInterface<DBtype> | null = null
    private _core: COREtype | null = null
    protected static singletone: any | null = null
    constructor() {
        if (Application.singletone === null) {
            Application.singletone = this
            return
        }
        return Application.singletone
    }
    defineDataBase(db: Database<DBtype>) {
        this._db = db.use() as DatabaseAdapterInterface<DBtype>
        return this
    }
    get db() {
        return this._db
    }
    get core() {
        return this._core
    }
    static getDB<AdapterImplementation>(): AdapterImplementation {
        if (Application.singletone._db === null) {
            throw new Error("База данных не подключена")
        }
        return Application.singletone._db
    }
}
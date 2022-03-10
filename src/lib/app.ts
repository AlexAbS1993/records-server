import { DatabaseAdapterInterface } from "../interfaces/DatabaseAdapterInterface"

export class Application<COREtype> {
    private _db: DatabaseAdapterInterface<any> | null = null
    private _core: COREtype | null = null
    protected static singletone: any | null = null
    constructor() {
        if (Application.singletone === null) {
            Application.singletone = this
            return
        }
        return Application.singletone
    }
    async defineDataBase(db: any) {
        this._db = await db.use()
        return this
    }
    get db() {
        return this._db
    }
    get core() {
        return this._core
    }
    // static getDB<AdapterImplementation>(): AdapterImplementation {
    //     if (Application.singletone._db === null) {
    //         throw new Error("База данных не подключена")
    //     }
    //     return Application.singletone._db
    // }
}
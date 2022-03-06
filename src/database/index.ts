export class Database {
    private _db: any
    protected static singletone: any | null = null
    constructor(db: any) {
        if (Database.singletone === null) {
            this._db = db
            Database.singletone = this
            return
        }
        return Database.singletone
    }
    use() {
        return this._db
    }
    static deleteInstance() {
        Database.singletone = null
    }
    static getInstance() {
        return Database.singletone
    }
}
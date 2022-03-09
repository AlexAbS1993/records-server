export class Database<DB> {
    protected static singletone: any | null = null
    constructor(private _db?: DB) {
        if (Database.singletone === null) {
            if (!_db) {
                throw new Error("Необходима дб")
            }
            this._db = _db
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
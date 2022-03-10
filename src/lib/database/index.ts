import { DBfiltersType, DBGetter } from "../../interfaces/DatabaseGetterInterface"
import { DatabaseAdapterInterface } from "../../interfaces/DatabaseAdapterInterface"

export class Database<ORM, Models> {
    protected static singletone: any | null = null
    private _models: Models | null = null
    constructor(private _db?: DatabaseAdapterInterface<ORM>) {
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
    async createModels(models: Models) {
        this._models = await models
        return this
    }
    get models() {
        return this._models
    }
    getData(getter: DBGetter, filters: DBfiltersType, type: 'one' | 'many') {
        switch (type) {
            case "many": {
                return getter.getMany(filters)
            }
            case 'one': {
                return getter.getOne(filters)
            }
        }
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
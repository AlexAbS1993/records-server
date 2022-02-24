import { IRecordListGetter, PersonDataType } from "./types"

export class Person {
    private _id: string
    private _name: string
    private _lastName: string
    private _recordList: null = null
    constructor(data: PersonDataType) {
        this._id = data.id
        this._name = data.name
        this._lastName = data.lastName
    }
    getRecordListFromPack(recordListGetter: IRecordListGetter) {
        this._recordList = recordListGetter.getByUserId(this._id)
    }
    get recordList() {
        return this._recordList
    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get lastname() {
        return this._lastName
    }
    get fullname() {
        return `${this._name} ${this._lastName}`
    }
}
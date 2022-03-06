import { RecordDataType } from "./types"

export class Record {
    private _id: string
    private _discription: string
    private _name: string
    private _userId: string
    private _value: string
    private _measure: string | null
    constructor(
        data: RecordDataType
    ) {
        let { id, discription, userId, name, value } = data
        if (!id || !discription || !userId || !name || !value) {
            throw new Error("Недостаточно аргументов для создания объекта")
        }
        this._id = id
        this._discription = discription
        this._userId = userId
        this._name = name
        this._value = value
        this._measure = null
    }
    defineMeasure(value: string) {
        this._measure = value
    }
    getGeneralInformation(): RecordDataType & {
        measure: string | null
    } {
        return {
            name: this.name,
            discription: this.discription,
            userId: this.userId,
            id: this.id,
            value: this.value,
            measure: this._measure ? this._measure : null
        }
    }
    get value() {
        return this._value
    }
    get name() {
        return this._name
    }
    get id() {
        return this._id
    }
    get discription() {
        return this._discription
    }
    get userId() {
        return this._userId
    }
    get measure() {
        return this._measure
    }
}
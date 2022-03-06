import { IRecordRegistrator, RequiredDBInterface } from "./types";


export class RecordRegistrator implements IRecordRegistrator {
    private _db: any
    constructor(db: RequiredDBInterface) {
        this._db = db
    }
    public registration(record: unknown, userId: string) {
        if (!this._isValidToRegistrate(record, userId)) {
            return this._returnDecline("Невозможно создать рекорд")
        }
        this._doRegistrate(record, userId)
        return this._returnAccept()
    };
    public updateRecord(record: unknown, userId: string) {
        if (!this._isValidToUpdate(record, userId)) {
            return this._returnDecline("Невозможно обновить рекорд")
        }
        this._doUpdate(record, userId)
        return this._returnAccept()

    };
    private _isValidToRegistrate(record: any, userId: string): boolean {
        if (this._isOnDb(record, userId)) {
            return false
        }
        return true
    }
    private _isValidToUpdate(record: any, userId: string): boolean {
        if (!this._isOnDb(record, userId)) {
            return false
        }
        return true
    }
    private _doRegistrate(record: any, userId: string) {
        this._db.createRecord(record, userId)
    }
    private _doUpdate(record: any, userId: string) {
        this._db.updateRecord(record, userId)
    }
    private _isOnDb(record: any, userId: string): boolean {
        if (!this._db.isRecordOnDB(record.name, userId)) {
            return false
        }
        return true
    }
    private _returnAccept() {
        return {
            status: true,
            error: null
        }
    }
    private _returnDecline(error: string) {
        return {
            status: false,
            error: error
        }
    }
}
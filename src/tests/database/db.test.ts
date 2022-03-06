import { Database } from './../../database/index';
import 'ts-jest'

describe("База данных создается и использует singletone", () => {
    afterEach(() => {
        Database.deleteInstance()
    })
    test("База данных создаётся", () => {
        let db = new Database({ db: true })
        expect(db.use()).toEqual({ db: true })
    })
    test("База данных возвращается после создания синглтона", () => {
        new Database({ db: true })
        let db2 = new Database({ db: false })
        expect(db2.use().db).toBe(true)
    })
    test("Удаляет инстанс при вызове метода", () => {
        expect(Database.getInstance()).toBeNull()
    })
})
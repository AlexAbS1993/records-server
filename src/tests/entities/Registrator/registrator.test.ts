import { RecordRegistrator } from '../../../entities/Registrator/index'
import 'ts-jest'

describe("Регистратор работает корректно", () => {
    describe("Проверка RecordRegistrator", () => {
        let registrator: RecordRegistrator
        let fakeDBNotOnDb = {
            createRecord() { },
            updateRecord() { },
            isRecordOnDB() {
                return false
            }
        }
        let fakeDBIsOnDb = {
            createRecord() { },
            updateRecord() { },
            isRecordOnDB() {
                return true
            }
        }
        beforeEach(() => {
            registrator = new RecordRegistrator(fakeDBNotOnDb)
        })
        test("Создает инстанс класса", () => {
            expect(registrator instanceof RecordRegistrator).toBe(true)
        })
        test("Возвращает успех при регистрации", () => {
            expect(registrator.registration({}, '1').status).toBe(true)
        })
        test("Возвращает провал при обновлении", () => {
            expect(registrator.updateRecord({}, '1').status).toBe(false)
        })
        test("Возвращает провал при регистрации", () => {
            let registrator = new RecordRegistrator(fakeDBIsOnDb)
            expect(registrator.registration({}, '1').status).toBe(false)
        })
        test("Возвращает успех при обновлении", () => {
            let registrator = new RecordRegistrator(fakeDBIsOnDb)
            expect(registrator.updateRecord({}, '1').status).toBe(true)
        })
    })
})
import { Record } from '../../../entities/Record/index'
import { RecordDataType } from '../../../entities/Record/types'
import 'ts-jest'

describe("Сущность record работает корректно", () => {
    let currectRecordData: RecordDataType = {
        userId: '1',
        id: "1",
        discription: "Это мой первый рекорд",
        name: "Бросок копья",
        value: "100"
    }
    let record: Record
    beforeEach(() => {
        record = new Record(currectRecordData)
    })
    test("Создаётся объект при наличии достаточного количества аргументов", () => {

        expect(record instanceof Record).toBe(true)
    })
    test("Возвращает данные по запросу к геттерам", () => {
        expect(record.id).toBe('1')
        expect(record.name).toBe('Бросок копья')
        //@ts-ignore
        expect(record.hello).toBe(undefined)
    })
    test("Добавляется и возвращает значение меры при использовании метода", () => {
        record.defineMeasure("m")
        expect(record.measure).toBe('m')
    })
})
import { PersonDataType, IRecordListGetter } from './../../../entities/Person/types';
import { Person } from './../../../entities/Person/index';
import 'ts-jest'

describe("Сущность Person работает корректно", () => {
    let person: Person
    let listGetter: IRecordListGetter = {
        getByUserId: (userId: string) => {
            return null
        }
    }
    let personsData: PersonDataType = {
        name: 'Alex',
        lastName: "Abs",
        id: "1"
    }
    beforeEach(() => {
        person = new Person(personsData)
    })
    test("Создается экземпляр класса", () => {
        expect(person instanceof Person).toBe(true)
    })
    test("Возвращается полное имя посредством метода", () => {
        expect(person.fullname).toBe("Alex Abs")
    })
    test("Получает и предоставляет список рекордов ", () => {
        person.getRecordListFromPack(listGetter)
        expect(person.recordList).toBe(null)
    })
})
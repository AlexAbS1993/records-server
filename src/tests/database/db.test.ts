import { Database } from './../../lib/database/index';
import 'ts-jest'
import { Dialect, Model, ModelCtor, Sequelize } from 'sequelize';
import 'dotenv/config'
import { fakeModels } from './fakeModels';

// describe("База данных создается и использует singletone", () => {
//     afterEach(() => {
//         Database.deleteInstance()
//     })
//     test("База данных создаётся", () => {
//         let db = new Database({ db: true })
//         expect(db.use()).toEqual({ db: true })
//     })
//     test("База данных возвращается после создания синглтона", () => {
//         new Database({ db: true })
//         let db2 = new Database({ db: false })
//         expect(db2.use().db).toBe(true)
//     })
//     test("Удаляет инстанс при вызове метода", () => {
//         expect(Database.getInstance()).toBeNull()
//     })
// })

describe("База данных подключается", () => {
    let seq: Sequelize
    let user: ModelCtor<Model<any, any>>
    beforeAll(() => {
        seq = new Sequelize(process.env.dbName as string, process.env.dbUser as string, process.env.dbPsw as string, {
            host: 'localhost',
            dialect: 'postgres'
        })
        user = fakeModels(seq).User
    })
    beforeEach(async () => {
        await user.sync({
            force: true
        })
        await seq.authenticate()
    })
    afterEach(() => {
        Database.deleteInstance()
    })
    test("Подключение работает исправно", async () => {
        try {
            await seq.authenticate()
            console.log("Test DB has succesfully connected")
        }
        catch (e: any) {
            console.log(e.message)
        }
        expect(seq instanceof Sequelize).toBe(true)
    })
    test("Подключение создает запись и находит её", async () => {
        await user.create({
            name: 'Alex'
        })
        let alexUser = await user.findOne({
            where: {
                name: "Alex"
            }
        })
        expect(alexUser).toBeDefined()
        //@ts-ignore
        expect(alexUser.name).toBe("Alex")
    })
    test("Если записи нет, то подключение возвращает пустой объект", async () => {
        let nullUser = await user.findOne({
            where: {
                name: 'kuku'
            }
        })
        expect(nullUser).toBeNull()
    })
})

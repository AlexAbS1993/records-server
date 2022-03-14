import { userDataGetterSequilize } from './../../../database/selectors/getters/user.getter';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { Database } from './../../../lib/database/index';
import 'dotenv/config'
import 'ts-jest'
import { DatabaseAdapterInterface } from '../../../interfaces/DatabaseAdapterInterface';
import { ModelsType, RecordType, UserModelType } from '../../../database/types';
import sequilizeAdapter from '../../../database/adapters/sequilizeAdapter';

describe("Геттеры для пользователя работают правильно", () => {
    let databaseSequlizeAdapter: DatabaseAdapterInterface<Sequelize>
    let testDatabase: Database<Sequelize, ModelsType>
    beforeAll(async () => {
        databaseSequlizeAdapter = await sequilizeAdapter
        testDatabase = await new Database(databaseSequlizeAdapter)
        await testDatabase.createModels({
            User: testDatabase.use()!.db.define<Model<UserModelType>>("User", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: DataTypes.STRING,
            }, {
                timestamps: false
            }
            ),
            Record: testDatabase.use()!.db.define<Model<RecordType>>("Record", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                discription: DataTypes.STRING
            }, {
                timestamps: false
            }
            )
        })
        await testDatabase.use()?.connect(process.env.NODE_ENV as 'test')
        await testDatabase.models?.User!.create({
            name: "Alex"
        })
    })
    test("Создается инстанс геттера", async () => {
        let getter = new userDataGetterSequilize(testDatabase.models?.User!)
        expect(getter instanceof userDataGetterSequilize).toBe(true)
    })
    test("Можно получить необходимые данные от геттера", async () => {
        let getter = new userDataGetterSequilize(testDatabase.models?.User!)
        let user = await getter.getOneById("1")
        expect(user).toBeDefined()
        expect(user.get().name).toBe("Alex")
    })
})
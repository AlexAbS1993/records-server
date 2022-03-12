import { UserModelType } from '../../../database/types';
import { FromAppToUserDBMapperInterface } from '../../../interfaces/Mappers/FromAppToUserDataDB.mapper.interface';
import { ModelCtor, Model } from 'sequelize/types';
import { DBSetterInterface } from './../../../interfaces/DatabaseSetterInterface';
export class UserDataSetterSequilize implements DBSetterInterface {
    constructor(private model: ModelCtor<Model<UserModelType, UserModelType>>, private mapper: FromAppToUserDBMapperInterface<UserModelType>) {
        this.mapper = mapper
    }
    async setOne(data: any) {
        let currentData = this.mapper.reworkOne(data)
        await this.model.create(currentData)
    };
    async setMany(data: any[]) {
        let currentData = this.mapper.reworkMany(data)
        await this.model.bulkCreate(currentData)
    };

}
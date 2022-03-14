import { UserModelType } from '../../../database/types';
import { DBfiltersType, DBGetter } from '../../../interfaces/DatabaseGetterInterface';
import { Model, ModelCtor } from 'sequelize';
import { dataBuilder } from './helper';
export class userDataGetterSequilize implements DBGetter {
    constructor(private model: ModelCtor<Model<UserModelType, UserModelType>>) {
        this.model = model
    }
    async getOne(filters: DBfiltersType) {
        return await this.model.findOne<Model<UserModelType>>(dataBuilder(filters))
    };
    async getMany(filters: DBfiltersType) {
        return await this.model.findAll<Model<UserModelType>>(dataBuilder(filters))
    };
    async getOneById(id: string, filters?: DBfiltersType) {
        return await this.model.findOne<Model<UserModelType>>({
            ...dataBuilder(filters),
            where: {
                id: id
            }
        })
    }
    async getOneByField(field: string | string[], values: any | any[], filters: DBfiltersType) {
        if (typeof field === 'string') {
            return await this.model.findOne<Model<UserModelType>>({
                where: {
                    ...dataBuilder(filters),
                    [field]: values
                }
            })
        }
        else {

        }
    }
}

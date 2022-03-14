import { FromAppToUserDBMapperInterface } from "../../../interfaces/Mappers/FromAppToUserDataDB.mapper.interface";
import { UserModelType } from '../../../database/types';

type requiredFieldsType = (keyof UserModelType)[]

export const requiredFieldsForUserModelType: requiredFieldsType = ['name']

export class userDataSequilizeMapper implements FromAppToUserDBMapperInterface<UserModelType>{
    reworkOne(data: any) {
        let result: any = {}
        requiredFieldsForUserModelType.forEach((field) => {
            if (!data[field]) {
                throw new Error(`Нет поля ${field} в исходных данных`)
            }
            result[field] = data[field]
        })
        return result as UserModelType
    }
    reworkMany(data: any[]) {
        let result: UserModelType[] = [] as UserModelType[]
        return result
    }
}
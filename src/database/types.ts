import { Model, ModelCtor } from "sequelize/types"

export type ModelsType = {
    "User": ModelCtor<Model<UserModelType>>,
    "Record": ModelCtor<Model<RecordType>>
}


export type UserModelType = {
    id?: number,
    name: string
}

export type RecordType = {
    id?: number,
    discription: string
}
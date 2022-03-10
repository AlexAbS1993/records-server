import { Model } from "sequelize/types"

export type ModelsType = {
    "User": Model<UserModelType>,
    "Record": Model<RecordType>
}


type UserModelType = {
    id: number,
    name: string
}

type RecordType = {
    id: number,
    discription: string
}
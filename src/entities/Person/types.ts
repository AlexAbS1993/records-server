export interface IRecordListGetter {
    getByUserId: (userId: string) => null
}

export type PersonDataType = {
    id: string,
    name: string,
    lastName: string
}
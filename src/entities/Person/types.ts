export interface IRecordListGetter {
    getByUserId: (userId: string, filters: any) => null
}

export type PersonDataType = {
    id: string,
    name: string,
    lastName: string
}
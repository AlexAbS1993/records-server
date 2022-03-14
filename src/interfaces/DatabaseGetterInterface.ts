export type DBfiltersType = {
    attributes?: string[] | null
    limits?: number | null,
    offset?: number | null,
    where?: any | null
}


export interface DBGetter {
    getOne: (filters: DBfiltersType) => any
    getMany: (filters: DBfiltersType) => any
    getOneById: (id: string, filters: DBfiltersType) => any
    getOneByField: (field: string | string[], values: any[], filters: DBfiltersType) => any
}
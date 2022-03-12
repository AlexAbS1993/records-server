export interface FromAppToUserDBMapperInterface<CurrentFormat> {
    reworkOne: (data: any) => CurrentFormat,
    reworkMany: (data: any[]) => CurrentFormat[]
}
export interface IRecordRegistrator {
    registration: (record: unknown, userId: string) => {
        status: boolean,
        error: string | null
    }
    updateRecord: (record: unknown, userId: string) => {
        status: boolean,
        error: string | null
    }
}

export interface RequiredDBInterface {
    createRecord: (record: unknown, userId: string) => void,
    isRecordOnDB: (recordName: string, userId: string) => boolean,
    updateRecord: (record: unknown, userId: string) => void
}
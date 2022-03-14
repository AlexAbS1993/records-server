import { DBfiltersType } from "../../../interfaces/DatabaseGetterInterface";

export function dataBuilder(filters?: DBfiltersType) {
    if (!filters) {
        return {}
    }
    let dataFile: any = {}
    if (filters.where) {
        dataFile.where = {
            ...filters.where
        }
    }
    if (filters.attributes) {
        dataFile.attributes = [...filters.attributes]
    }
    if (filters.limits) {
        dataFile.limits = filters.limits
    }
    if (filters.offset) {
        dataFile.offset = filters.offset
    }
    return dataFile
}
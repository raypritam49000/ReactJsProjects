import { CHANGE_NAME } from './all-action'

export const anotherName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}


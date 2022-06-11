import { LOADER } from "./types"

export const setLoader = (value) => {
    return {
        type : LOADER,
        payload : value
    }
}
import {
    saveSignedInUser
} from "../reducers/auth";

import { store } from "..";
const { dispatch } = store


export const setSignedInUser = data => {
    dispatch(saveSignedInUser(data))
}





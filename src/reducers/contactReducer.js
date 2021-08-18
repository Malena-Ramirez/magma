import { types } from "../types/types";

export const contactReducer = (state = [], action) => {
    switch (action.type){
        case types.contactSend:
            return{
                id: action.payload.id,
                name:  action.payload.name,
                email: action.payload.email,
                message: action.payload.message
            }
            default:
                return state;
    }
}
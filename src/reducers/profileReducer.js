import { types } from "../types/types";

const initialState = {
    userProfile:[]
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){     
        case types.profileActive:   
        return {
            ...state,
            active:{
                ...action.payload
            }
        }
        case types.profileLoad:
            console.log(action.payload)
            return{
                ...state,
                userProfile:[...action.payload]
            }

        default:
            return state;
    }    
}

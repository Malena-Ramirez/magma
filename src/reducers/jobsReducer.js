import { types } from "../types/types";

const initialState = {
    jobs: [],
    
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.jobsAddNew:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            }
        default:
            return state;
    }
}


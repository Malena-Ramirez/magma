import { types } from "../types/types";

const initialState = {
    jobs: []
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.jobsAddNew:
      return {
        ...action.state,
        jobsAddNew: [action.payload, ...state.jobsAddNew]
      };

        case types.jobsActive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            }
        case types.jobsLoad:
            console.log(action.payload)
            return{
                ...state,
                jobs:[...action.payload]
            }
        default:
            return state;
    }
}


import { types } from "../types/types";

const initialState = {
    jobs: []
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.jobsAddNew:
            return{
                ...action.state,
                jobs: [action.payload, ...state.jobs]
            }
    
        default:
            return state;
    }
}


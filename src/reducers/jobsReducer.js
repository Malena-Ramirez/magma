import { types } from "../types/types";

const initialState = {
    jobs: [],
    active: null
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.jobsAddNew:
            return {
                ...action.state,
                jobsAddNew: [action.payload, ...state.jobsAddNew]
            };

        case types.jobsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.jobsLoad:
            return {
                ...state,
                active: null,
                jobs: [...action.payload]
            }

        case types.jobsDelete:
            return {
                ...state,
                active: null,
                jobs: state.jobs.filter(element => element.id !== action.payload)
            };

        default:
            return state;
    }
}


import { types } from "../types/types";

const initialState = {
    profile: {}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.profileAddNew:
            return {
                ...action.state,
                profile: action.payload
            };
        case types.profileLoad:
            return {
                ...state,
                profile: action.payload
            };

        default:
            return state;
    }
}

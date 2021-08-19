import { types } from "../types/types";

const initialState = {
  candidates: []
}

export const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.candidateAdd:
      return {
        ...action.state,
        candidates: [action.payload, ...state.candidates]
      };
    case types.candidateLoad:
      return {
        ...state,
        candidates: [...action.payload]
      };

    default:
      return state;
  }
}
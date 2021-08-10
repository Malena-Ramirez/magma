import { types } from "../types/types";

const initialState = {
  trainingCard: [],
  active: null
}

export const trainingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.trainingCardNew:
      return {
        ...action.state,
        trainingCard: [action.payload, ...state.trainingCard]
      };

    case types.trainingCardActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      };

    case types.trainingCardLoad:
      return {
        ...state,
        trainingCard: [...action.payload]
      };

    default:
      return state;
  }
}

import { types } from "../types/types";

const initialState = {
  trainingCard: []
}

export const trainingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.trainingCardNew:
      return {
        ...action.state,
        trainingCard: [action.payload, ...state.trainingCard]
      };

    default:
      return state;
  }
}

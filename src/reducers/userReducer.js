import { types } from "../types/types";

const initialState = {
  companyUser: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.companyUser:
      return {
        ...state,
        companyUser: action.payload
      };

    default:
      return state;
  }

}

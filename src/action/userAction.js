import { types } from "../types/types"

export const userAction = () => {
  return {
    type: types.companyUser,
    payload: true
  }
}

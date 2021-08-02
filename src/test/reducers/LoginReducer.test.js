import loginReducer from "../../reducers/loginReducer";
import { types } from '../../types/types'

describe('Pruebas en LoginReducer', () => {

  test('Debe retornar el estado por defecto', () => {
    const state = loginReducer({}, {});
    expect(state).toEqual({});
  })

  test('Debe autenticarse', () => {
    const action = {
      type: types.login,
      payload: {
        id: '123456',
        displayName: 'Pedro'
      }
    }
    const state = loginReducer({}, action);
    expect(state).toEqual({ id: '123456', name: 'Pedro' })
  })

})
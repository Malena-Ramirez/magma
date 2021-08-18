import { types } from '../types/types'


const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displayName,
                email: action.payload.email,
                photo: action.payload.photo,
            };

        case types.logout:
            return {};
        default:
            return state;
    }

}

export default loginReducer

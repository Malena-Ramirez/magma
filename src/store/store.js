import loginReducer from "../reducers/loginReducer.js";
import { trainingCardReducer } from "../reducers/trainingCardReducer.js";
import { jobsReducer } from "../reducers/jobsReducer.js";
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from "../reducers/profileReducer.js";
import { userReducer } from "../reducers/userReducer.js";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login: loginReducer,
    trainingCard: trainingCardReducer,
    jobs: jobsReducer,
    profile: profileReducer,
    companyUser: userReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)
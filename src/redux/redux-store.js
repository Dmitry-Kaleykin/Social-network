import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
//import friendsReducer from './friends-reducer';

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    header: authReducer,
    form: formReducer,
    app: appReducer,
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;
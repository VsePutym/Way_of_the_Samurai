import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import users_reducer from "./users_reducer";
import news_reducer from "./news_reducer";
import settings_reducer from "./settings_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'

//Объединяем редьюсеры
let reducers = combineReducers({
  newsPage: news_reducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: users_reducer,
  settingsPage: settings_reducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
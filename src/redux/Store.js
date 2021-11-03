import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { AuthReducer } from "./reducers/Auth.Reducer";
import { homeVideosReducer } from "./reducers/Video.Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  homeVideos: homeVideosReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

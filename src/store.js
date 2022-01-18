import { createStore } from "redux";
import rootReducer from "./reducer/reducer";

const initialState = {
  auth: false,
};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Education } from "./education";
import { Accomplishments } from "./accomplishments";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {

    const store = createStore(

        combineReducers({
            education: Education,
            accomplishments: Accomplishments
        }),

        applyMiddleware(thunk, logger);

    );

    return store;

}
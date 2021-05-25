// check action and dispatch to reducer
import { GET_PLACE } from "../actions/types";

export default function placeReducer (state={}, action) {
    switch (action.type) {
        case GET_PLACE:
            return action.payload;
        default:
            return state;
    }
}
import { UPDATE_BUTTON_TEXT } from "../actions/navigation";

let defaultState = {
    text: "foo bar"
}

export let navigationReducer = (state, action) => {

    if (!state) {
        return defaultState
    }

    switch (action.type) {
        case UPDATE_BUTTON_TEXT:
            return Object.assign({}, state, {
                 text: action.payload
            })
        default:
            return state
    }

    return defaultState
}
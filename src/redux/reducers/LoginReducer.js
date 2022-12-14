import { loginTypes } from "../actions/ActionTypes";

const initialState = {
    curUser: {email: "", password: ""}
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.SET_CURRENT_USER:
            return {...state, curUser: action.payload}

        default:
            return state;
    }
}
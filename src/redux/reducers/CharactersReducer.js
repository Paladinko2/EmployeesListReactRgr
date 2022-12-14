import { characterTypes } from "../actions/ActionTypes";

const initialState = {
    characters: []
}

export const CharactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case characterTypes.ADD_CHARACTER:
            return { ...state, characters: [...state.characters, action.payload] }

        case characterTypes.SET_CHARACTERS:
            return { ...state, characters: action.payload }

        case characterTypes.REMOVE_CHARACTER:
            return { ...state, characters: state.characters.filter((character) => character.id !== action.payload) }

        default:
            return state;
    }
}
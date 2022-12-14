import { characterTypes } from "./ActionTypes";

export const addCharacterAction = (payload) => ({type: characterTypes.ADD_CHARACTER, payload});
export const setCharactersAction = (payload) => ({type: characterTypes.SET_CHARACTERS, payload});
export const removeCharacterAction = (payload) => ({type: characterTypes.REMOVE_CHARACTER, payload});
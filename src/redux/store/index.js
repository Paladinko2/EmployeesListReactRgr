import { legacy_createStore as createStore, combineReducers} from 'redux'
import { CharactersReducer } from '../reducers/CharactersReducer';
import { LoginReducer } from '../reducers/LoginReducer';

const RootReducer = combineReducers({
    characters: CharactersReducer,
    login: LoginReducer
})

export const store = createStore(RootReducer);
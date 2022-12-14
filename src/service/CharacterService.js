import axios from "axios";
import "./users.json"
import { addCharacterAction, removeCharacterAction, setCharactersAction } from "../redux/actions/CharactersActions";

class CharacterService {
    static async getAll(dispatch) {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const response = await axios.get('users.json');

        const characters = response.data.map((character) => {
            return { id: character.id, firstName: character.name.split(" ")[0], lastName: character.name.split(" ")[1], email: character.email };
        })
        console.log(characters);

        dispatch(setCharactersAction(characters));
    }

    static async addCharacter(character, dispatch) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', { name: character.firstName + " " + character.lastName, email: character.email });

        const responseData = { id: character.id, firstName: response.data.name.split(" ")[0], lastName: response.data.name.split(" ")[1], email: response.data.email };
        console.log(responseData);

        dispatch(addCharacterAction(responseData));
    }

    static async deleteCharacter(id, dispatch) {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);

        console.log(response);

        dispatch(removeCharacterAction(id));
    }
}

export default CharacterService;
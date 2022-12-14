import { useDispatch } from "react-redux";
import { removeCharacterAction } from "../../../redux/actions/CharactersActions";

const CharacterItem = ({ character }) => {
    const dispatch = useDispatch();
    
    return (
        <tr key={character.id}>
            <td>{character.id}</td>
            <td>{character.firstName}</td>
            <td>{character.lastName}</td>
            <td>{character.email}</td>
            <td><button className='btn_small' onClick={() => dispatch(removeCharacterAction(character.id))}>Delete</button></td>
        </tr>
    );
}

export default CharacterItem;


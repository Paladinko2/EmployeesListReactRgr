import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterService from '../../service/CharacterService';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    const characterData = useSelector(state => state.characters.characters);
    const dispatch = useDispatch();

    const characters = characterData.map((character) => {
        return (
            <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.firstName}</td>
                <td>{character.lastName}</td>
                <td>{character.email}</td>
                <td><button className='btn_small' onClick={() => CharacterService.deleteCharacter(character.id, dispatch)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{characters}</tbody>;
}

const CharactersTable = () => {
    const characterData = useSelector(state => state.characters.characters);

    return (
        <div>
            <table className="table">
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        </div>
    );
}

export default CharactersTable;
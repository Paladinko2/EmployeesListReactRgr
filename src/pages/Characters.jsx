import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CharacterService from '../service/CharacterService';
import Pagination from '../components/Pagination/Pagination';
import PostCharacter from '../components/PostCharacter/PostCharacter';
import { AuthContext } from '../context';
import "../index.css"

function Characters() {
    const { setIsAuth } = useContext(AuthContext);

    const dispatch = useDispatch();

    useEffect(() => {
        CharacterService.getAll(dispatch);
    }, [dispatch]);

    return (
        <div className="container">
            <div className="curUser">
                <h1 className="customtxth1">Welcome, {localStorage.getItem("username")}</h1>
                <button className="btn" onClick={() => {
                    localStorage.removeItem("auth");
                    setIsAuth(false);
                }}>Log out</button>
            </div>
            <label style={{marginLeft:"50px"}}>Fill the form to add new user</label>
            <PostCharacter />
            <h3 className="customtxth1">Characters</h3>
            <Pagination itemsPerPage={3} />
        </div>
    );
}

export default Characters;
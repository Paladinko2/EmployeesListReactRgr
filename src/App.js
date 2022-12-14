import React, { useState } from 'react';
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { AuthContext } from './context';
import { store } from './redux/store';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
    }, []);

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </Provider>
        );
}

export default App;
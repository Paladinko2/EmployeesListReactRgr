import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContext } from "../../context"
import { publicRoutes, privateRoutes } from "../../router/routes"

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth ?
        <Routes>

            {privateRoutes.map(route =>
                <Route 
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}

            <Route
                path="*"
                element={<Navigate to="/characters" replace />}
            />

        </Routes>
        :
        <Routes>

            {publicRoutes.map(route =>
                <Route 
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />

        </Routes>
    )
}

export default AppRouter;
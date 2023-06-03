import {Routes, Route, Navigate} from "react-router-dom"
import {routs} from "../../utils/router";

const AppRouter = () => {
    return (
        <Routes>
            {routs.map(({path, component}) => (
                <Route key={path} path={path} element={component()} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRouter;
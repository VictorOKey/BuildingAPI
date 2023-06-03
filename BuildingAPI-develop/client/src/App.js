import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <AppRouter/>
        </Router>
    );
}

export default App;

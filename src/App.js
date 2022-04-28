import './App.css';
import {ReactComponent as Logo} from '../src/css/img/logo.svg'
import IntroLogo from '../src/css/img/logo-white.svg'
import SearchIcon from '@material-ui/icons/Search';
import Arrow from './css/img/read-more-arrow.png'
import {BrowserRouter as Router, Link} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

export default function App() {

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <HomePage/>
                    <footer className="footer">
                        <Link to={"/"}>
                            <img src={IntroLogo} alt=""/>
                        </Link>

                        <div className="footer-copyright">
                            &copy; created by username - devChallenge.io {new Date().getFullYear()}
                        </div>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

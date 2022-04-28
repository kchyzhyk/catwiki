import './App.css';
import {ReactComponent as Logo} from '../src/css/img/logo.svg'
import IntroLogo from '../src/css/img/logo-white.svg'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
import Arrow from './css/img/read-more-arrow.png'

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <a href="/">
                        <Logo/>
                    </a>
                </header>
                <div className="intro">
                    <img src={IntroLogo} alt="" className="whiteLogo"/>
                    <div className="introText">
                        Get to know more about your <br/> cat breed
                    </div>
                    <form className="form">
                        <input type="text"
                               className="search"
                               placeholder="Enter your breed"
                        />
                        <SearchIcon
                            className="search-icon"/>
                    </form>
                </div>
                <div className="top-breeds">
                    <div className="top-breeds-title">Most Searched Breeds</div>
                    <div className="top-breeds-hr"></div>
                    <div className="subtitle-container">
                        <div className="top-breeds-subtitle">66+ Breeds For you <br/> to discover</div>
                        {/*<Link>*/}
                            <div className="top-breeds-button">SEE MORE
                                <img src={Arrow} alt="" />
                            </div>
                        {/*</Link>*/}
                    </div>
                    <div className="top-breeds-cats">
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                hello
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                hello
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                hello
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                hello
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

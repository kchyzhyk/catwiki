import './App.css';
import {ReactComponent as Logo} from '../src/css/img/logo.svg'
import IntroLogo from '../src/css/img/logo-white.svg'
import SearchIcon from '@material-ui/icons/Search';
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
                    <div className="top-breeds-hr" />
                    <div className="subtitle-container">
                        <div className="top-breeds-subtitle">66+ Breeds For you <br/> to discover</div>
                        {/*<Link>*/}
                        <div className="top-breeds-button">SEE MORE
                            <img src={Arrow} alt=""/>
                        </div>
                        {/*</Link>*/}
                    </div>
                    <div className="top-breeds-cats">
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                <div className="top-breeds-cat-img">
                                    hello
                                </div>
                                <div className="top-breeds-cat-name">Hello</div>
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                <div className="top-breeds-cat-img">
                                    hello
                                </div>
                                <div className="top-breeds-cat-name">Hello</div>
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                <div className="top-breeds-cat-img">
                                    hello
                                </div>
                                <div className="top-breeds-cat-name">Hello</div>
                            </div>
                        </div>
                        <div className="top-breeds-column">
                            <div className="top-breeds-cat">
                                <div className="top-breeds-cat-img">
                                    hello
                                </div>
                                <div className="top-breeds-cat-name">Hello</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-have-cat-section">
                    <div className="why-content">
                        <div className="why-text-hr" />
                        <div className="why-text-title">Why should you <br/> have a cat?</div>
                        <div className="why-text">
                            Having a cat around you can actually trigger the release of calming chemicals in your body
                            which lower your stress and anxiety leves
                        </div>
                        <div className="top-breeds-button">Read more
                            <img src={Arrow} alt=""/>
                        </div>
                    </div>
                    <div className="why-imgs">
                        <div className="why-imgs-column">
                            <div className="why-img-1">pic-1</div>
                            <div className="why-img-2">pic-2</div>
                        </div>
                        <div className="why-imgs-column">
                            <div className="why-img-3">pic-3</div>
                        </div>

                    </div>
                </div>

                <footer className="footer">
                    <a href="/">
                        <img src={IntroLogo} alt=""/>
                    </a>

                    <div className="footer-copyright">
                        &copy; created by username - devChallenge.io 2021
                    </div>

                </footer>
            </div>
        </div>
    );
}

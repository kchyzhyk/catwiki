import React from 'react';
import {Link} from "react-router-dom";
import IntroLogo from "../css/img/logo-white.svg";
import Arrow from "../css/img/read-more-arrow.png";
import {Header} from "../components/Header";
import {SearchBreeds} from "../components/SearchBreeds";

export const HomePage = () => {

    return (
        <div>
            <div className="intro">
                <img src={IntroLogo} alt="" className="whiteLogo"/>
                <div className="introText">
                    Get to know more about your <br/> cat breed
                </div>
                <SearchBreeds />
            </div>
            <div className="top-breeds">
                <div className="top-breeds-title">Most Searched Breeds</div>
                <div className="top-breeds-hr"/>
                <div className="subtitle-container">
                    <div className="top-breeds-subtitle">66+ Breeds For you <br/> to discover</div>
                    <Link to={'/'} className="top-breeds-button">SEE MORE
                        <img src={Arrow} alt=""/>
                    </Link>
                </div>
                <div className="top-breeds-cats">
                    <Link to={'/'} className="top-breeds-column">
                        <div className="top-breeds-cat">
                            <div className="top-breeds-cat-img">
                                hello
                            </div>
                            <div className="top-breeds-cat-name">Hello</div>
                        </div>
                    </Link>
                    <Link to={'/'} className="top-breeds-column">
                        <div className="top-breeds-cat">
                            <div className="top-breeds-cat-img">
                                hello
                            </div>
                            <div className="top-breeds-cat-name">Hello</div>
                        </div>
                    </Link>
                    <Link to={'/'} className="top-breeds-column">
                        <div className="top-breeds-cat">
                            <div className="top-breeds-cat-img">
                                hello
                            </div>
                            <div className="top-breeds-cat-name">Hello</div>
                        </div>
                    </Link>
                    <Link to={'/'} className="top-breeds-column">
                        <div className="top-breeds-cat">
                            <div className="top-breeds-cat-img">
                                hello
                            </div>
                            <div className="top-breeds-cat-name">Hello</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="why-have-cat-section">
                <div className="why-content">
                    <div className="why-text-hr"/>
                    <div className="why-text-title">Why should you <br/> have a cat?</div>
                    <div className="why-text">
                        Having a cat around you can actually trigger the release of calming chemicals in your
                        body
                        which lower your stress and anxiety leves
                    </div>
                    <Link to={'/'} className="top-breeds-button">Read more
                        <img src={Arrow} alt=""/>
                    </Link>
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
        </div>
    )
}

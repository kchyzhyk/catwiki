import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import IntroLogo from "../css/img/logo-white.svg";
import Arrow from "../css/img/read-more-arrow.png";
import {Header} from "../components/Header";
import {SearchBreeds} from "../components/SearchBreeds";
import {getAllBreeds, getImgs} from "../api/store";
import {TopFourBreeds} from "../components/TopFourBreeds";

export const HomePage = () => {
    const [top4, setTop4] = useState([])
    const [allInfo, setAllInfo] = useState([])

    // useEffect(() => {
    //     getImgs().then(r => console.log(r[0]))
    // }, [])

    useEffect(() => {
        getAllBreeds().then(r => {
            setAllInfo(r)
            const topFourBreeds = r.map((a) => ({sort: Math.random(), value: a}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
            setTop4(topFourBreeds.slice(0, 4))
        })
    }, [])

    return (
        <div>
            <div className="intro">
                {console.log(allInfo)}
                <img src={IntroLogo} alt="" className="whiteLogo"/>
                <div className="introText">
                    Get to know more about your <br/> cat breed
                </div>
                <SearchBreeds allInfo={allInfo}/>
            </div>
           <TopFourBreeds top4={top4}/>
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

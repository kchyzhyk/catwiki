import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import IntroLogo from "../css/img/logo-white.svg";
import Arrow from "../css/img/read-more-arrow.png";
import {SearchBreeds} from "../components/SearchBreeds";
import {getAllBreeds} from "../api/store";
import {TopFourBreeds} from "../components/TopFourBreeds";

import Cat1 from '../css/img/cat-1.png'
import Cat2 from '../css/img/cat-2.png'
import Cat3 from '../css/img/cat-3.png'
import {Loading} from "../components/Loading";

export const HomePage = () => {
    const [top4, setTop4] = useState([])
    const [loading, setLoading] = useState(true)
    const [allInfo, setAllInfo] = useState([])

    useEffect(() => {
        getAllBreeds().then(r => {
            setAllInfo(r)
            const topFourBreeds = r.map((a) => ({sort: Math.random(), value: a}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
            setTop4(topFourBreeds.slice(0, 4))
            setLoading(false)
        })
    }, [])

    return loading ? <Loading /> : (
        <div>
            <div className="intro">
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
                        <div className="why-img-1">
                            <img src={Cat1} alt=""/>
                        </div>
                        <div className="why-img-2">
                            <img src={Cat2} alt=""/>
                        </div>
                    </div>
                    <div className="why-imgs-column">
                        <div className="why-img-3">
                            <img src={Cat3} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

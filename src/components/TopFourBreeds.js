import React from 'react'
import {Link} from "react-router-dom";
import Arrow from "../css/img/read-more-arrow.png";

export const TopFourBreeds = ({top4}) => {
    return (
        <>
            <div className="top-breeds">
                <div className="top-breeds-title">Most Searched Breeds</div>
                <div className="top-breeds-hr"/>
                <div className="subtitle-container">
                    <div className="top-breeds-subtitle">66+ Breeds For you <br/> to discover</div>
                    <Link to={'/breeds/top-10'} className="top-breeds-button">SEE MORE
                        <img src={Arrow} alt=""/>
                    </Link>
                </div>
                <div className="top-breeds-cats">
                    {
                        top4.length > 0 ? top4.map((item, i) => {
                            return (
                                <Link to={`/breeds/search/${item.name}`} className="top-breeds-column" key={i}>
                                    <div className="top-breeds-cat">
                                        <div className="top-breeds-cat-img">
                                            <img src={item.image.url} alt=""/>
                                        </div>
                                        <div className="top-breeds-cat-name">{item.name}</div>
                                    </div>
                                </Link>
                            )
                        }) :
                            (
                               <></>
                            )
                    }
                </div>
            </div>
        </>
    )
}

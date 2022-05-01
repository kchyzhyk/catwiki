import React, {useEffect, useState} from 'react'
import {getTop10Breeds} from "../api/store";
import {Link} from "react-router-dom";

export const TopTenBreedsPage = () => {
    const [top10, getTop10] = useState([])

    useEffect(() => {
        getTop10Breeds(10).then(r => getTop10(r))
    }, [])

    return (
        <>
            <div className="top-content">
                <div className="top-title">
                    Top 10 most searched breeds
                </div>
                <div className="top-cats">
                    {top10.length > 0 ? top10.map((item, i) => {
                        return (
                            <Link to={`/breeds/search/${item.name}`} className="top-cat-link" key={i}>
                                <div className="top-cat">
                                    <div className="top-cat-img">
                                        <img src={item.image.url} alt=""/>
                                    </div>
                                    <div className="top-cat-content">
                                        <div className="top-cat-name">
                                            {i + 1}. {item.name}
                                        </div>
                                        <div className="top-cat-desc">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : <></>
                    }

                </div>
            </div>
        </>
    )
}

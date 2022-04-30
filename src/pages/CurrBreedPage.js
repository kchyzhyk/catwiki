import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getCurrBreed, getCurrBreedImg} from "../api/store";
import {BreedStats} from "../components/BreedStats";

export const CurrBreedPage = () => {
    const {name} = useParams()

    const [currBreed, setCurrBreed] = useState([])
    const [catImg, setCatImg] = useState('https://cdn2.thecatapi.com/images/SMuZx-bFM.jpg')


    useEffect(() => {
        getCurrBreed(name).then(r => setCurrBreed(r[0]))
    }, [])

    useEffect(() => {
        getCurrBreedImg(currBreed.reference_image_id).then(r => setCatImg(r.url))
    }, [currBreed])

    return (
        <>
            <div className="breed-content">
                <div className="breed-column">
                    <div className="breed-profile-photo">
                        <img src={catImg} alt=""/>
                    </div>
                </div>
                <div className="breed-profile-details">
                    <div className="breed-name">{currBreed.name}</div>
                    <div className="breed-desc">
                        {currBreed.description}
                    </div>
                    <BreedStats breed={currBreed}/>
                </div>
            </div>
            <div className="breed-photos">
                photos
            </div>
        </>
    )
}

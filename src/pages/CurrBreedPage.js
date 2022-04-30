import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getCurrBreed} from "../api/store";
import {BreedStats} from "../components/BreedStats";

export const CurrBreedPage = () => {
    const {name} = useParams()

    const [currBreed, setCurrBreed] = useState([])

    useEffect(() => {
        getCurrBreed(name).then(r => setCurrBreed(r[0]))
    }, [])

    return (
        <>
            <div className="breed-content">
                <div className="breed-column">
                    <div className="breed-profile-photo">photo</div>
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

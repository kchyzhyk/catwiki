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
                    <div className="breed-name">Bengal</div>
                    <div className="breed-desc">
                        Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for
                        first-time cat owners. Extremely intelligent, curious and active, they demand a lot of
                        interaction and woe betide the owner who doesn't provide it.
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

import React, {useState} from 'react'
import {useParams} from "react-router-dom";

export const CurrBreedPage = () => {
    const {name} = useParams()

    const [currBreed, setCurrBreed] = useState([])

    // useEffect(() => {
    //     getCurrBreed(name).then(r => setCurrBreed(r[0]))
    // }, [])

    return (
        <>
            <div className="breed-content">
                <div className="breed-column">
                    <div className="breed-profile-photo">photo</div>
                </div>
                    <div className="breed-profile-details">
                        <div className="breed-name">Bengal</div>
                        <div className="breed-desc">Bengal</div>
                    </div>
            </div>
            <div className="breed-photos">
                photos
            </div>
        </>
    )
}

import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getCurrBreed, getCurrBreedImg, getImgs} from "../api/store";
import {BreedStats} from "../components/BreedStats";
import {Loading} from "../components/Loading";

export const CurrBreedPage = () => {
    const {name} = useParams()

    const [currBreed, setCurrBreed] = useState([])
    const [loading, setLoading] = useState(true)
    const [otherPhotos, getOtherPhotos] = useState([])
    const [catImg, setCatImg] = useState('https://cdn2.thecatapi.com/images/SMuZx-bFM.jpg')


    useEffect(() => {
        getCurrBreed(name).then(r => setCurrBreed(r[0]))
    }, [name])

    useEffect(() => {
        getCurrBreedImg(currBreed.reference_image_id).then(r => setCatImg(r.url))
    }, [currBreed])

    useEffect(() => {
        getImgs(8, currBreed.id).then(r => getOtherPhotos(r))
        setLoading(false)
    }, [currBreed])

    return loading ? <Loading /> : (
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
            <div className="breed-photos-body">
                <div className="breed-photos-title">
                    Other photos
                </div>
                <div className="breed-photos">
                    {
                        otherPhotos.length > 0 ? otherPhotos.map((item, i) => {
                           return(
                               <div className="breed-photos-column" key={i}>
                                   <div className="breed-photo">
                                       <img src={item.url} alt=""/>
                                   </div>
                               </div>
                           )
                        }) : <></>
                    }

                </div>
            </div>
        </>
    )
}

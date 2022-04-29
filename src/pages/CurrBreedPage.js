import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getCurrBreed} from "../api/store";

export const CurrBreedPage = () => {
    const {name} = useParams()

    const [currBreed, setCurrBreed] = useState([])

    useEffect(() => {
        getCurrBreed(name).then(r => setCurrBreed(r))
    }, [])

    return (
        <>
            <div>BREED PAGE</div>
            <div>{name}</div>
            <div>{console.log(currBreed.id)}</div>
        </>
    )
}

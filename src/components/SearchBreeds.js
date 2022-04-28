import React, {useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {getAllBreeds} from "../api/store";
import {Link} from "react-router-dom";

export const SearchBreeds = () => {
    const [allBreeds, setAllBreeds] = useState([
        'Book',
        'pear',
        'l.addams',
        'George',
        'Bengal',
        'trip',
        'reason',
        'near',
        'wave',
        'concerned',
        'drain',
        'vast',
        'use',
        'beam',
        'massive',
        'volcano',
        'servant'
    ])

    // useEffect(() => {
    //     getAllBreeds().then(r => setAllBreeds(r.map((it) => it.name)))
    // }, [])

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase().split('');
        console.log(value)

        allBreeds.filter((item) => item.toLowerCase().includes(value) ? console.log('here i am', item) : item)
    }

    return (
        <form className="form">
            <input type="text"
                   className="search"
                   placeholder="Enter your breed"
                   onChange={handleChange}
            />
            <SearchIcon className="search-icon"/>

            <div className="names-list hidden">
                <ul className="names-list hidden">
                    {allBreeds.map((name, index) =>
                        <Link to={`/breeds/search/${name}`}>
                            <li key={index}> {name} </li>
                        </Link>
                    )}
                </ul>
            </div>
        </form>
    )
}

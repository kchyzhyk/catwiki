import React, {useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {getAllBreeds} from "../api/store";
import {Link} from "react-router-dom";

export const SearchBreeds = () => {
    const [getOne, setGetOne] = useState([])
    const [allBreeds, setAllBreeds] = useState([
        // 'Book',
        // 'pear',
        // 'l.addams',
        // 'George',
        // 'Bengal',
        // 'trip',
        // 'reason',
        // 'near',
        // 'wave',
        // 'concerned',
        // 'drain',
        // 'vast',
        // 'use',
        // 'beam',
        // 'massive',
        // 'volcano',
        // 'servant'
    ])

    useEffect(() => {
        getAllBreeds().then(r => setAllBreeds(r.map((it) => it.name)))
    }, [])

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        console.log(value)
        // const results = new Array()
        allBreeds.map((item) => item.toLowerCase().includes(value) ? console.log('results', item) : item)
        // console.log('results', results)
    }

    return (
        <form className="form">
            {/*{console.log(getOne)}*/}
            <input type="text"
                   className="search"
                   placeholder="Enter your breed"
                   onChange={handleChange}
            />
            <SearchIcon className="search-icon"/>

            <div className="names-list">
                <ul>
                    {allBreeds.map((name, index) =>
                        <Link className="list-item" to={`/breeds/search/${name}`}>
                            <li key={index}> {name} </li>
                        </Link>
                    )}
                </ul>
            </div>
        </form>
    )
}

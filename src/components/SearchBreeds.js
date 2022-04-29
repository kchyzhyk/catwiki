import React, {useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {getAllBreeds} from "../api/store";
import {Link} from "react-router-dom";

export const SearchBreeds = () => {
    const [showList, setShowList] = useState(false)
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
    const [getOne, setGetOne] = useState([])

    useEffect(() => {
        getAllBreeds().then(r => setAllBreeds(r.map((it) => it.name)))
    }, [])

    const handleChange = (e) => {
        const value = e.target.value.trim().toLowerCase();
        const results = []
        allBreeds.map((item) => item.toLowerCase().includes(value) ? results.push(item) : item)
        setGetOne(results)
    }

    return (
        <form className="form">
            {/*{console.log(getOne)}*/}
            <input type="text"
                   className="search"
                   placeholder="Enter your breed"
                   onChange={handleChange}
                   onClick={() => setShowList(true)}
            />
            <SearchIcon className="search-icon"/>

            {
                showList && getOne.length > 0 ?
                    <div className="names-list">
                        <ul>
                            {getOne.map((name, index) =>
                                <Link className="list-item" to={`/breeds/search/${name}`}>
                                    <li key={index}> {name} </li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    :
                    (<div />)
            }
        </form>
    )
}

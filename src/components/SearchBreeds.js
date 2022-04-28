import React, {useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {getAllBreeds} from "../api/store";
import {Link} from "react-router-dom";

export const SearchBreeds = () => {

    const [allBreeds, setAllBreeds] = useState([])

    useEffect(() => {
        getAllBreeds().then(r => setAllBreeds(r.map((it) => it.name)))
    }, [])
    return (
        <form className="form">
            <input type="text"
                   className="search"
                   placeholder="Enter your breed"
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

import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {Link} from "react-router-dom";

export const SearchBreeds = ({allInfo}) => {
    const [showList, setShowList] = useState(false)
    const [getOne, setGetOne] = useState([])


    const handleChange = (e) => {
        const value = e.target.value.trim().toLowerCase();
        const results = []
        allInfo?.map((item) => item.name.toLowerCase().includes(value) ? results.push(item) : item)
        setGetOne(results)
    }

    return (
        <form className="form">
            <input type="text"
                   className="search"
                   placeholder="Enter your breed"
                   onChange={handleChange}
                   onClick={() => setShowList(true)}
            />
            <SearchIcon className="search-icon"/>

            {showList && getOne?.length > 0 ?
                    <div className="names-list">
                        <ul>
                            {getOne.map((item, i) =>
                                <Link className="list-item" to={`/breeds/search/${item.name}`} key={i}>
                                    <li key={item.id}> {item.name} </li>
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

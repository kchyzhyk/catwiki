import React from "react";
import CatLoad from '../css/img/cat-loading.gif'

export const Loading = () => {
    return (
        <div className="loading">
            <img src={CatLoad} alt="Cat swaying"/>
        </div>
    )
}

import React from 'react'
import Cat404 from '../css/img/cat404.gif'

export const NotFoundPage = () => {
    return (
        <>
            <div className="not-found-content">
                <h1>Sorry, meow do not found</h1>
                <img src={Cat404} alt="Cat with shocked face and text that says uh oh"/>
            </div>
        </>
    )
}

import React from 'react'

export const BreedStats = ({breed}) => {

    const colorRatings = num => {
        const ratingsArr = []
        for(let i = 0; i < 5; i++) {
            if(num > 0) {
                ratingsArr.push(<div className="brown-bg" key={i}/>)
            }else {
                ratingsArr.push(<div className="no-bg" key={i}/>)
            }
            --num
        }
        return ratingsArr
    }

    return (
        <>
            <div className="stats">
                <p>
                    <span className="stat">Temperament: </span>
                    {breed.temperament}
                </p>
                <p>
                    <span className="stat">Origin: </span>
                    {breed.origin}
                </p>
                <p>
                    <span className="stat">Life Span: </span>
                    {breed.life_span} years
                </p>

                <div className="rating">
                    <span className="stat">Adaptability: </span>
                    <div className="rating-container">
                        {colorRatings(breed.adaptability).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Affection level: </span>
                    <div className="rating-container">
                        {colorRatings(breed.affection_level).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Child friendly: </span>
                    <div className="rating-container">
                        {colorRatings(breed.child_friendly).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Grooming: </span>
                    <div className="rating-container">
                        {colorRatings(breed.grooming).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Intelligence: </span>
                    <div className="rating-container">
                        {colorRatings(breed.intelligence).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Health issues: </span>
                    <div className="rating-container">
                        {colorRatings(breed.health_issues).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Social needs: </span>
                    <div className="rating-container">
                        {colorRatings(breed.social_needs).map((x)=> x)}
                    </div>
                </div>

                <div className="rating">
                    <span className="stat">Stranger friendly: </span>
                    <div className="rating-container">
                        {colorRatings(breed.stranger_friendly).map((x)=> x)}
                    </div>
                </div>

            </div>
        </>
    )
}

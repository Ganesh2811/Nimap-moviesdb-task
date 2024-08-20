import React from 'react'
import "./CastCard.scss"
const CastCard = ({ title, cast=[] }) => {
    return (
        <>
            <div className="container">
                <h1 className='casrHeader'>{title}</h1>
                <div className="castWrapper">
                    {
                        cast.length > 0 ? (
                            cast.map((data) => (
                                <div className="itemWrapper">
                                    <img src={"https://image.tmdb.org/t/p/w500/" + data.profile_path} className='castProfileImage' alt='castImage' />
                                    <div className="textWrapper">
                                        <p className='castTitle'>{data.original_name}</p>
                                        <p className='castCharacter'>Character: {data.character}/</p>
                                    </div>
                                </div>
                            ))) :
                            (
                                <p>No cast information available.</p>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default CastCard
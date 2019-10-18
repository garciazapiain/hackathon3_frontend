import React from 'react';

import GenreSelection from '../GenreSelection';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>

            <GenreSelection 
                onGenreSelect={ props.onGenreSelect }
            />

            <ul>
                {props.data.map( movie => (
                    <li>
                        {movie.name}
                        {movie.year}
                        {movie.rating}
                        <img src={movie.poster_url} alt=""/>
                    </li>
                ))}
            </ul>


        </>
        
    )
}
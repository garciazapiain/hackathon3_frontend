import React from 'react';

export default function UpcomingMovies(props) {
    
    return (
        <>
            <h1>
                UPCOMING MOVIES
            </h1>

            <ul>
                {props.data.map( movie => (
                    <li>
                        <p>{movie.name}</p>
                        <img src={movie.poster_url} alt=""/>
                        <p>{movie.rating}</p>
                        <p>{movie.begins_at}</p>
                    </li>
                ))}
            </ul>

        </>
    )
}
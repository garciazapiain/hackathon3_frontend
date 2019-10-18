import React from 'react';

export default function PlayingToday(props) {
    console.log(props);
    return (
        <>
            <h1>PLAYING TODAY</h1>

            {props.data.map( movie => (
                <li>
                    <h4>{movie.name}</h4>
                    <img src={movie.poster_url} alt=""/>
                </li>
            ))}
        </>
    )
}
import React from 'react';

export default function NowPlaying(props) {
    return (
        <>
            NOW PLAYING

            <ul>
                {props.data.map( movie => (
                    <li>
                        {movie.name}
                        <img src={movie.poster_url} alt=""/>
                        {movie.rating}
                        {movie.begins_at}
                        {movie.duration}
                    </li>
                ))}
            </ul>
        </>
    )
}
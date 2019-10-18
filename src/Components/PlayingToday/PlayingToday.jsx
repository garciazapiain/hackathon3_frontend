import React from 'react';

export default function PlayingToday(props) {
    return (
        <>
            PLAYING TODAY

            {props.data.map( movie => (
                <li>
                    {movie.name} : {movie.begins_at}
                </li>
            ))}
        </>
    )
}
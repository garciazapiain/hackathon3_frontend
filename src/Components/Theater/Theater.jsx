import React from 'react';
import Header from '../Header';
import NowPlaying from '../NowPlaying';
import PlayingToday from '../PlayingToday';
import UpcomingMovies from '../UpcomingMovies';

export default function Theater(props) {
    console.log(props);
    return (
        <>
            <Header 
                slug={ props.data.slug }
            />

            <h1>{ props.data.name }</h1>
            <h3>{ props.data.address }</h3>
            <a href={ props.data.url }>{ props.data.url }</a>
            <p>{ props.data.opens_at } - { props.data.closes_at }</p>

            <div className="page__columns">

                <main>
                    <PlayingToday />

                    <UpcomingMovies />
                </main>

                <aside>

                    <NowPlaying />
                    
                </aside>

            </div>
        </>
        
    )
}
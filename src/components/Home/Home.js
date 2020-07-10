import React from 'react';
import './Home.css'


export default function Home(){
    return(
        <div className="Home">
            <div>
                <h1 className="heading">Welcome To Human Expression Finder</h1>
            </div>
            <div>
                <img className="image" alt= "users" src="https://robohash.org/$?set=set5&size=400x400"></img>
            </div>
        </div>

    )
}
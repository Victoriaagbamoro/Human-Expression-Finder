import React from 'react';
import './Card.css'


export default function(props){
    return(
        <div className="card-container">
            <img alt= "users" src={`https://robohash.org/${props.user.id}?set=set5&size=250x250`}></img>
            <div className="card-para">
                <h2>Expression: {props.user.feeling}</h2> 
                <p>Name: {props.user.name}</p>
                <p>Mode: {props.user.mode}</p>
                </div>
        </div>
    )
}
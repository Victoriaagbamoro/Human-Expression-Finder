import React from 'react';
import './CardList.css'
import Card from '../Card/Card' 
 


export default function CardList (props){
    return(  
        <div className="card-list">
            {props.Users.map(user => (<Card key={user.id} user = { user}/>))}
        
        </div> 

    )  
}
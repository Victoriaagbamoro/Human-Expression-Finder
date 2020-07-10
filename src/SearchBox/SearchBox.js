import React from 'react';
import './SearchBox.css'


export default function SearchBox({placeholder, handleChange}){
    return(
        <div className="search">

            <input type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />

        </div>
    )
}
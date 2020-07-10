import React from 'react';
import {NavLink} from "react-router-dom"
import styled from "styled-components"



export default function Navbar(){
    return(
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link active" to="/expression">Human Expression</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}


// STYLED COMPONENT
const NavbarContainer = styled.div`
.nav-item active{
    color: #064638;
}
.nav-link{
    font-size: 20px;
    margin: 20px 35px;
    border: 1px solid #2ec4b6;
    color: #064638;
    &:hover{
        background: #2ec4b6 !important;
    }
}

`;
import React, { Component } from 'react';
import CardList from './Card-list/CardList';
import SearchBox from '../SearchBox/SearchBox';


class Data extends Component{
    constructor(){
        super()

        this.state={
            Users: [
                
            ],
            searchField: ''
            
        
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("http://localhost:8000/Users")
        .then(response => response.json())
        .then(users => this.setState({Users : users}) )
    }

    handleChange = e =>{
        this.setState({searchField: e.target.value})
    }
    render(){
        const {Users, searchField} = this.state;
        const filteredUsers = Users.filter(user =>
            user.feeling.toLowerCase().includes(searchField.toLowerCase())
            );

        return(
            <div>
                <SearchBox placeholder ="search Expression"
                handleChange={this.handleChange}
                />

                <CardList Users={filteredUsers}/> 

            </div>
        )
    }
}

export default Data
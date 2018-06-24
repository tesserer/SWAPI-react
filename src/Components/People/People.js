import React, { Component } from 'react';
import axios from 'axios';

class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleList: []
        }
    }

    componentDidMount() {
        console.log('App component mounted');
        this.getPeople('https://swapi.co/api/people/?format=json');
        
    }

    async getPeople(url) {
        await axios.get(url)
            .then((response) => {
                console.log('The response data:', response.data);
                //2. Set the state to hold the planetys data from the response
                this.setState({ peopleList: [...this.state.peopleList, ...response.data.results] });
                if (response.data.next == null) {
                    console.log('All people received');
                } else {
                    this.getPeople(response.data.next);
                }
            })
            .catch((error) => {
                console.log('error:', error);

            })
    }

    
    render() {
        console.log('PeopleList', this.state.peopleList);
        return (
            <div>
                <h2>People</h2>
            <ul>
                    {this.state.peopleList.map(people =>
                    <li key={people.name}> Name:  {people.name}
                        <p>Height: {people.height}</p>
                        <p>Mass: {people.mass}</p>
                        <p>Hair Color: {people.hair_color}</p>
                        <p>Skin Color: {people.skin_color}</p>
                        <br /></li>)}

            </ul>
            </div>
        );
    }
}

export default People;

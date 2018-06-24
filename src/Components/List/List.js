import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planetList: []
        }
    }

    componentDidMount() {
        console.log('App component mounted');
        this.getPlanets('https://swapi.co/api/planets/?format=json');

    }


    async getPlanets(url) {
        await axios.get(url)
            .then((response) => {
                console.log('The response data:', response.data);
                //2. Set the state to hold the planetys data from the response
                this.setState({ planetList: [...this.state.planetList, ...response.data.results] });
                if (response.data.next == null) {
                    console.log('All planets received');
                } else {
                    this.getPlanets(response.data.next);
                }
            })
            .catch((error) => {
                console.log('error');

            })
    }
   
    render() {
        console.log('PlanetList', this.state.planetList);
        return (
            <div>
                <h2>PLANETS</h2>
            
                <ul>
                    {this.state.planetList.map(planet =>
                        <li key={planet.name}> Name:  {planet.name}
                            <p>Rotation Period: {planet.rotation_period}</p>
                            <p>Orbital Period: {planet.orbital_period}</p>
                            <p>Diameter: {planet.diameter}</p>
                            <p>Climate: {planet.climate}</p>
                            <br /></li>)}

                </ul>
            </div>
        );
    }
}

export default List;

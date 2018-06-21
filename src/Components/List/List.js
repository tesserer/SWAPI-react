import React, { Component } from 'react';


class List extends Component {

   
   
    render() {
        console.log('PlanetList', this.props.planetList);
        return (
            <div>
                <h2>PLANETS</h2>
            
                <ul>
                    {this.props.planetList.map(planet =>
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

import React, { Component } from 'react';


class People extends Component {

    
    render() {
        console.log('PeopleList', this.props.peopleList);
        return (
            <div>
                <h2>People</h2>
            <ul>
                    {this.props.peopleList.map(people =>
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

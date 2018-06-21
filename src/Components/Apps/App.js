import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import List from '../List/List';
import People from '../People/People';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList: [],
      planetList: []
    }
  }

  componentDidMount() {
    console.log('App component mounted');
    this.getPeople('https://swapi.co/api/people/?format=json');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }


  getPlanets(url) {
    axios.get(url)
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


  getPeople(url) {
    axios.get(url)
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
        console.log('error');

      })
  }
  render() {

    return (
      <div className="App">

        <Header />

        <List planetList = {this.state.planetList}/>

        <People peopleList = {this.state.peopleList}/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Logo from '../components/Logo'

class App extends Component {

      state = {
      robots: [],
      searchfield: ''
      // robo_quote:''
    }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(quotes => {this.setState({ robots: quotes})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  handleClick = () => {

  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Logo />
          <h1 className='f1'>Robo Quotes</h1>
          <h6 className='f3'>Click on a card to get a quote</h6>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
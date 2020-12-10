import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css';

//App component with 2 states
class App extends Component {
  //Any component that has state can use the constructor syntax function to create this.state
  constructor() {
    super();
    //React uses this state to render and pass them down as props
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  //We manage the state in the code below. The app is the only thing that can change this state
  //We passed down onSearchChange to the search box
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
}
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
        return robots.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
      });
    return (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

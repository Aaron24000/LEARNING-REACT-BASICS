import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from './Scroll';

//App component with 2 states
class App extends Component {
  //Any component that has state can use the constructor syntax function to create this.state
  constructor() {
    super();
    //React uses this state to render and pass them down as props
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  //We manage the state in the code below. The app is the only thing that can change this state
  //We passed down onSearchChange to the search box
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <scroll>
            <CardList robots={filteredRobots} />
          </scroll>
        </div>
      );
    }
  }
}

export default App;

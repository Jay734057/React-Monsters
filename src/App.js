import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue:''
    };
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()) || monster.email.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <div className="App">
        <h1>MONSTERS</h1>
        <SearchBox 
        placeholder='search monsters' 
        onChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;

import React from 'react';
import data from './data/data';
import Toolbar from './components/Toolbar';
import Soundboard from './components/Soundboard';
import Item from './components/Item';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      selectedSoundboard: 0,
      filterText: '',
    }
  }

  setSelectedSoundboard = (soundboardIndex) => {
    this.setState({ selectedSoundboard: soundboardIndex });
  }

  setFilterText = (filterText) => {
    this.setState({ filterText });
  }

  render() {
    const filteredItems = data[this.state.selectedSoundboard].items.filter(
      (item) => item.name.includes(this.state.filterText)
    );

    return (
      <div className="App" >
        <h1>React Soundboard</h1>
        <Toolbar
          soundboards={data}
          onSelect={this.setSelectedSoundboard}
          onFilter={this.setFilterText}
          filterValue={this.state.filterText}
        />
        <Soundboard>
          {filteredItems.map(
            (item) => <Item item={item} key={item.name} />
          )}
        </Soundboard>
      </div>
    );
  }

}

export default App;

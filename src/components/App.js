import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    //take copy of existing state - never mutate state directly
    const fishes = { ...this.state.fishes };
    //Add new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //copy state
    const order = { ...this.state.order };

    //add to or update order
    order[key] = order[key] + 1 || 1;

    //call set state to update state object
    this.setState({order});

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key =>
              <Fish
                index={key}
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />

      </div>
    )
  }
}

export default App;

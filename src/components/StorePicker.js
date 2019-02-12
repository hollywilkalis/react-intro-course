import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  //creating a reference
  myInput = React.createRef();

  goToStore = (event) => {
    //1. stops the form
    event.preventDefault();

    //2. get text from input - don't touch the DOM. ref touches the DOM and allows us to reference a DOM node on the page.
    const storeName = this.myInput.value.value;

    //3. change to page to /store/whatever without refreshing the page
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;

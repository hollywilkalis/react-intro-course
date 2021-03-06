import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const { name, image, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <div>
        <li className='menu-fish'>
          <img src={image} alt={image} />
          <h3 className='fish-name'> {name}
            <span className = 'price'> {formatPrice(price)} </span>
          </h3>
          <p className = 'desc'>{desc}</p>
          <button
            disabled={!isAvailable}
            onClick={this.handleClick}>
            {isAvailable ? 'Add to order' : 'Sold out'}
          </button>

        </li>
      </div>
    )
  }
}

export default Fish;

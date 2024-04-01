import { Component } from 'react'

import './cardTeam.scss';

class CardTeam extends Component {
  render() {
    const {img, name} = this.props;
    return (
      <div className='card__team'>
        <img src={img} alt={name} />
        <p className='card__team__title'>{name}</p>
        <p className='card__team__text'>COO</p>
      </div>
    )
  }
}

export default CardTeam;
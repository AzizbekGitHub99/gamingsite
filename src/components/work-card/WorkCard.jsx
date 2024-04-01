import React, { Component } from 'react'

import './workCard.scss';

export class WorkCard extends Component {
    render() {
        const {category, title, desc}  = this.props;
        return (
            <div className='work__card'>
            <span className='work__card__span'>
                {category}
            </span>
            <h3>{title}</h3>
            <p>
                {desc}
            </p>
        </div>
    )
  }
}

export default WorkCard
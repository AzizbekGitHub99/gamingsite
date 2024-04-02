import { Component } from 'react';

import img from '../../images/about-2.png';

import './info.scss';

class Info extends Component {
  render() {
    return (
      <section className='info'>
        <div className="container info__container">
            <div className='info__left'>
            <img src={img} alt="info  img"/>
            </div>
          <div className='info__right'>
            <p className='info__right__desc'>
              Lorem ipsum
            </p>
            <h3 className='info__right__title'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </h3>
            <p className='info__right__text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Info
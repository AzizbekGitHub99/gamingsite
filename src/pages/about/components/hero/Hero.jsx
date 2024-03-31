import { Component } from 'react';

import { Link } from 'react-router-dom';

import assasin from '../../images/about-1.png'

import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <div className="container hero__container">
            <div className="hero__left">
                <div className='hero__links'>
                    <Link className='hero__links__home' to={'/'}>Home</Link>
                    <p>About US</p>
                </div>
                <h1 className='hero__title'>Lorem Ipsum is simply dummy text of the printing and.</h1>
                <p className='hero__text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button>
                    Get in touch
                </button>
            </div>
            <div className="hero__right">
                <img src={assasin} alt="assasin" />
            </div>
        </div>
      </section>
    )
  }
}

export default Hero;
import { Component} from 'react';

import Subscribe from '../../../../components/subscribe/Subscribe';

import './subscribeAbout.scss';

class SubscribeAbout extends Component {
  render() {
    return (
    <section className='subscribes'>
      <div className="container">
        <h1 className='subscribes__title'>Lorem Ipsum</h1>
        <p className='subscribes__text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <Subscribe mode="dark"/>
      </div>
    </section>
    )
  }
}

export default SubscribeAbout;
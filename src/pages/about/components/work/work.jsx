import { Component } from 'react';

import './work.scss';
import WorkCard from '../../../../components/work-card/WorkCard';
import work from '../../consts/work';

class Work extends Component {
  render() {
    return (
      <section className="work">
        <div className="container">
          <h1 className='work__title'>Why work with us</h1>
          <div className='work__cards__row'>
            {work.map((el, i) => <WorkCard key={i} {...el}/> )}
          </div>
        </div>
      </section>
    )
  }
}

export default Work
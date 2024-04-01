import { Component } from 'react'

import CardTeam from '../../../../components/team-card/CardTeam';

import team from '../../consts/team'

import './team.scss';

class Team extends Component {
  render() {
    return (
      <section className='team'>
        <div className="container">
          <h1 className='team__title'>Our Team</h1>
         <div className='team__cards__row'>
          {team.map(el =><CardTeam {...el}/> )}
         </div>
        </div>
      </section>
    )
  }
}

export default Team
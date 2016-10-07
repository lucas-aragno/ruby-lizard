import React, { Component } from 'react'
import styles from '../../styles/app.css'

import ThingForm from '../components/ThingForm'
import ThingList from '../components/ThingList'

import superagent from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      things: []
    }
  }

  componentWillMount () {
    this.getThings()
  }

  getThings () {
    superagent
      .get('/api/things')
      .end((err, res) => {
        if (!err) {
          this.setState({
            things: res.body
          })
        }
      })
  }

  render () {
    const { things } = this.state
    return (
      <div>
        <div className='col-md-6'>
          <img src='https://s-media-cache-ak0.pinimg.com/564x/83/89/f3/8389f37dff8cd46ae2c18970f6eee75b.jpg' />
        </div>
        <div className='col-md-6'>
          <ThingForm afterCreate={this.getThings.bind(this)}/>
          <ThingList things={things}/>
        </div>
      </div>
    )
  }
}

export default App

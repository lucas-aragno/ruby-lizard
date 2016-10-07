import React, { Component } from 'react'
import styles from '../../styles/app.css'
import ThingForm from '../components/ThingForm'


class App extends Component {
  render () {
    return (
      <div>
        <div className='col-md-6'>
          <img src='https://s-media-cache-ak0.pinimg.com/564x/83/89/f3/8389f37dff8cd46ae2c18970f6eee75b.jpg' />
        </div>
        <div className='col-md-6'>
          <ThingForm />
        </div>
      </div>
    )
  }
}

export default App

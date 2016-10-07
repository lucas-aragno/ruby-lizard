import React, { Component } from 'react'
import superagent from 'superagent'

class ThingForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nameValue: '',
      descriptionValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.createThing = this.createThing.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target
    switch (name) {
      case 'name':
        this.setState({name: value})
        break
      case 'description':
        this.setState({description: value})
        break
      default:
        return
    }
  }

  createThing (e) {
    e.preventDefault()
    const { name, description } = this.state
    const { afterCreate } = this.props
    superagent
      .post('/api/things')
      .send({name: name, description: description})
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          console.error('Something went wrong creating a thing!')
        } else if (res.ok) {
          afterCreate()
        }
      })
  }

  render () {
    return (
      <div>
        <form>
          <input
            name='name'
            placeholder='name'
            onChange={this.handleChange}
          />
          <input
             type='text'
             name='description'
             placeholder='description'
             onChange={this.handleChange}
           />
          <input
            type='file'
            name='thing pic'
            accept='image/*'
          />
          <button
            className='btn'
            onClick={this.createThing}>
              Create Thing!
          </button>
        </form>
      </div>
    )
  }
}

export default ThingForm

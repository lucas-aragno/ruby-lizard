import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css'
require('../styles/app.css')

document.addEventListener('DOMContentLoaded', event => (
  render(<App />, document.getElementById('root'))
))

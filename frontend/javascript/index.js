import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

document.addEventListener('DOMContentLoaded', event => (
  render(<App />, document.getElementById('root'))
))
/*
document.addEventListener('DOMContentLoaded', event => (
  render(
    <App />, document.getElementById('root'))
  )
)
*/

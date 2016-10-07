import React from 'react'

const ThingList = ({
  things
}) => (
  <div className='thing-list'>
    <ul>
      {
        things.map((thing) => <li key={`${thing.name}-key`}> {thing.name} </li>)
      }
    </ul>
  </div>
)

export default ThingList

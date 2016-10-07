import React from 'react'

const ThingForm = () => (
  <div>
    <form>
      <input name='name' placeholder='name' />
      <input type='text' name='description' placeholder='description' />
      <input type='file' name='thing pic' accept='image/*' />
      <button className='btn'> Create Thing! </button>
    </form>
  </div>
)

export default ThingForm

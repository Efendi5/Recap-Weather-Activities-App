import React from 'react'

export default function Entry({description, handleDelete}) {
  return (
    <article className='entry-container'>
      <p className='entry-description'>{description}</p>
      <button type='button' onClick={handleDelete}>Delete</button>
    </article>
  )
}

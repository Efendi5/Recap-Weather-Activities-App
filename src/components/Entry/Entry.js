import React from 'react'

export default function Entry({description}) {
  return (
    <article className='entry-container'>
      <p className='entry-description'>{description}</p>
    </article>
  )
}

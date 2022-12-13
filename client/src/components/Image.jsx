import React from 'react'

const Image = ({ url, text }) => {
  return (
    <section className='my-1 bg-[#F1F4F6] min-h-max flex items-center justify-center'>
      <img src={url} alt={text} />
    </section>
  )
}

export default Image
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center p-1 bg-black text-white'>
      <p className='text-lg font-bold'>OpenAI Image Generator</p>
      <a href="https://beta.openai.com/docs/introduction/overview">
        <p className='text-[1.15rem] font-medium cursor-pointer'>Docs</p>
      </a>
    </header>
  )
}

export default Navbar
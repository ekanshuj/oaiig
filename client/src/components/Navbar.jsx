import React from 'react'

const Navbar = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center px-1 py-3 bg-black text-white'>
      <p className='text-xl sm:text-2xl font-semibold tracking-wider'>OpenAI Image Generator</p>
      <a href="https://beta.openai.com/docs/introduction/overview">
        <p className='text-xl sm:text-2xl font-medium cursor-pointer underline tracking-wider'>Docs</p>
      </a>
    </header>
  )
}

export default Navbar
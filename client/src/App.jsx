import React from 'react'

import { Navbar, Component } from "./components";

const App = () => {
  return (
    <main className='container sm:max-w-[75rem] mx-auto'>
      <Navbar />
      <Component />
    </main>
  )
}

export default App
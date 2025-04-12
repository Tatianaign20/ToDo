import React, { useState } from 'react'
import { Head } from './components/views/global/Head/Head'
import { Foot } from './components/views/global/Foot/Foot'
import { Main } from './components/pages/Main/Main'

function App() {

  return (
    <>
    <div>
      <Head />
      <Main />
      <Foot />
      </div>
    </>
  )
}

export default App

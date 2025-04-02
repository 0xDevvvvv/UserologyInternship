import React from 'react'
import News from './components/news'
import Weather from './components/weather'
import Crypto from './components/crypto'


export default function page() {
  return (
    <div>
      <News/>
      <Weather/>
      <Crypto/>
    </div>
  )
}

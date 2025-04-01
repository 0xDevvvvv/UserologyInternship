import React from 'react'
import News from './news'
import Weather from './weather'
import Crypto from './crypto'

export default function page() {
  return (
    <div>
      <News/>
      <Weather/>
      <Crypto/>
    </div>
  )
}

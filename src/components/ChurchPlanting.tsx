import React from 'react'
import Image from 'next/image';
import church from '../assets/images/churchImage.png'
import { Open_Sans, Raleway } from '@next/font/google'

type Props = {}
const raleway = Raleway({
    subsets: ['latin'],
    weight:'300',
    variable: '--font-raleway',
    display: 'optional'
})
  
const openSans = Open_Sans({
    subsets: ['latin'],
    weight:'300',
    variable: '--font-openSans',
  display: 'optional'})

const ChurchPlanting = (props: Props) => {
  return (
      <div id='churchPlanting'>
          <div><Image src={church} alt='image of church'/></div>
          <div>
              <h2 className={raleway.className}>Church Planting</h2>
              <p className={openSans.className}>The idea of church planting is based on the example set by Paul and Barnabas in Acts 13, where they were sent by the Church in Jerusalem to establish a new church in an area where the Gospel was not easily accessible. The goal of church planting is to share the love of God with the community and to form strong Christian congregations that can, in turn, plant further churches, leading to the transformation of cities and cultures through the spread of salvation. Church planting is not just the responsibility of individual church planters, but of the entire Church. Through the efforts of local congregations, church planters, Send Network we can work together to plant churches in diverse contexts and cultures. This changes cities, changes lives, and brings God great glory.</p>
          </div>
    </div>
  )
}

export default ChurchPlanting
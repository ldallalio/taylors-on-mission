import React from 'react'
import Image from 'next/image';
import { Open_Sans, Raleway } from '@next/font/google'
import WhoWeAreImage from '../assets/images/WhoWeArePhoto.png'

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
const WhoWeAre = (props: Props) => {
  return (
      <div id='whoWeAre'>
          <div className={raleway.className}><h2>Who We Are</h2></div>
          <div id='whoWeAreContent'>
              <div><Image src={WhoWeAreImage} alt='taylor family'/> </div>
              <div className={openSans.className}><p>Emily and I both grew up in Choudrant, LA. We were brought up in church and surrendered to Jesus at an early age. We started dating in college and were married a couple of years later.  After college we moved to Ft. Worth, TX for me to attend Southwestern Baptist Theological Seminary. While in Texas we had our two wonderful girls, Melody and Madilynn. After graduating we moved back to Louisiana and I began working at our local church as a youth pastor. Now we are looking forward to our next adventure in Canada.</p></div>
          </div>
    </div>
  )
}

export default WhoWeAre
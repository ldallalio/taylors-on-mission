import React from 'react'
import Image from 'next/image';
import Baby from '../assets/images/baby.png'
import Couple from '../assets/images/nathanandemily.png'
import Melody from '../assets/images/melody.png'

type Props = {}

const PictureDivider = (props: Props) => {
  return (
      <div id='picDivider'>
          <Image alt='Baby' src={Baby}/>
          <Image alt='couple' src={Couple}/>
          <Image alt='Melody' src={Melody}/>
    </div>
  )
}

export default PictureDivider
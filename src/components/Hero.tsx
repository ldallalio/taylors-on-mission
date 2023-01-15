import React from 'react'
import Image from 'next/image';
import taylorImage from '../assets/images/HeroCenterImage.svg'
import downArrow from '../assets/images/arrow-alt-circle-down.svg'

type Props = {}
function Hero({ }: Props) {
  return (
      <div id='hero'>
          <Image src={ taylorImage } alt='taylors mission hero image' id='heroImage' />
          <a href="#">
              
          <Image  src={downArrow} alt='read more' id='downArrow'  />

          </a>
    </div>
  )
}

export default Hero
import React from 'react'
import { Raleway } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from '../assets/images/TaylorLogo.png';
import Image from 'next/image';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway',
  display: 'optional'
})
type Props = {}
const Header = (props: Props) => {
  return (
    <header className={ raleway.className }>
      <div id='navbar'>
        <Image alt='Taylors Logo' src={ Logo } />
        <nav>
          <a href="#whoWeAre">
            <div className="nav-item">Our Story</div>
          </a>
          <a href="#partnerWithUs">
            <div className="nav-item">Become A Partner</div>
          </a>
          <a href="#partnerWithUs">
            <div className="nav-item">Contact</div>
          </a>
          {/* <a href="#donate">
            <div className="nav-item">Donate</div>
          </a> */}
        </nav>
      </div>
    </header>
  )
}

export default Header
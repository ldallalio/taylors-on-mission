import React from 'react'
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

const Vision = (props: Props) => {
  return (
    <div id='ourVision'>
         <div className={raleway.className}>
         <h2>Our Vision</h2>
        </div>
          <div id='ourVisionText'>
              <div className={openSans.className}><p>The vision is to create gospel-centered relationships and a culture of discipleship and multiplication. The plan involves building relationships within the community, particularly through work and school connections. Initially gaining experience by working with an established church plant. Once a core group has been established, the focus will shift to creating discipleship pathways and eventually launching the church&apos;s services, likely in a home or rented space. The emphasis will be on evangelism and ministry, including outreach events like soccer camps and vacation Bible school. The hope is that through this process, new disciples will be formed and eventually plant additional churches, leading to the transformation of the city through the spread of the Gospel. The vision is subject to the sovereignty of God and may be adapted as He leads.</p></div>
          </div></div>
  )
}

export default Vision
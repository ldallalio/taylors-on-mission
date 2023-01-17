import React from 'react'
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
const OurCalling = (props: Props) => {
  return (
      <div id='ourCalling'>
          <div>
              <h2 className={raleway.className}>Why Calgary</h2>
              <p className={openSans.className}>Calgary is a large city in Canada with a low percentage of Christians and a lack of Bible-believing churches. Less than 5% of the 1.6 million people claim to be Christians. These numbers rival many parts of the world in lostness. Many of its residents are first generation from all over the world and experience loneliness, depression, and other mental health issues. The city has a high need for connection, community, and hope and is in need of more churches to provide these things and share the gospel. We believe that God is calling us to serve and share the gospel in Calgary.</p>
          </div>
          <div>
              <h2 className={raleway.className}>Our Calling</h2>
              <p className={openSans.className}>As sinners who have experienced Jesus’ amazing grace, we desire others to experience it as well. We have a general calling to follow Him and share His love with others. We also have a specific calling to share the gospel with unreached people. After prayer and searching, we believe that God has led us to focus on this work in Calgary, Canada, where there is a low percentage of Christians. We have determined that this is God&apos;s will for our lives and are confident that His will shall be accomplished.</p>

          </div>
    </div>
  )
}

export default OurCalling
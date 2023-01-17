import React from 'react'
import { NextPage } from 'next'
import { Raleway } from '@next/font/google'

interface Props {
  userText?: string,
  dividerColor?:string,
}
const raleway = Raleway({
    subsets: ['latin'],
    weight:'100',
    variable: '--font-raleway',
  display: 'optional'})

const Divider: NextPage<Props> = ({userText, dividerColor}) => {
  return (
    <div className={dividerColor}>
      <div className={raleway.className}>
      <p>{ userText }</p>
      </div>
    </div>
  )
}

export default Divider
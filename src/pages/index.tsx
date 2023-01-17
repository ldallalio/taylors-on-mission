import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import WhoWeAre from '@/components/WhoWeAre'
import OurCalling from '@/components/OurCalling'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const divOneText = '“The spirit of Christ is the spirit of missions. The nearer we get to Him, the more intensely missionary we become.” ― Henry Martyn'

  const divTwoText = '“He said to them, “Go into all the world and preach the gospel to all creation.” ― Mark 16:15'
  return (
    <>
      <Head>
        <title>Taylor&apos;s On Mission</title>
        <meta name="description" content="Taylor&apos;s On Mission<" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <Hero />
        <Divider userText={ divOneText } dividerColor={'divider blue'} />
        <WhoWeAre />
        <OurCalling />
        <Divider userText={ divTwoText } dividerColor={'divider gray'} />
      </main>
    </>
  )
}

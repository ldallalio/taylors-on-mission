import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Divider from '@/components/Divider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Divider/>
      </main>
    </>
  )
}

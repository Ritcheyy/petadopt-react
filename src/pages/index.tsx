import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-primary`}>
      <Head>
        <title>Petadopt - React</title>
        <meta name="description" content="Created by Ritcheyy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} font-medium`}>
          Petadopt
        </h1>

      </main>
    </div>
  )
}

export default Home

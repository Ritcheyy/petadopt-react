import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-primary`}>
      <Head>
        <title>Petadopt - React</title>
      </Head>

      <main className={styles.main}>
          <Player
              autoplay
              loop
              src={require('../assets/lottie/pet.json')}
              style={{ height: '200px', width: '200px' }}
          ></Player>
        <h1 className={`${styles.title} font-medium mt-5`}>
          Petadopt
        </h1>

      </main>
    </div>
  )
}

export default Home

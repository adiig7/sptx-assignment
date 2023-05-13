import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Center from '../components/Home'
import CustomLinkContainer from '../components/CustomLinkContainer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SPTX</title>
        <meta name="description" content="sptx assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid grid-cols-12 bg-black">
        <Sidebar />
        <Center />
        <CustomLinkContainer />
      </main>
    </div>
  );
}

export default Home

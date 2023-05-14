import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Center from "../components/Home";
import CustomLinkContainer from "../components/CustomLinkContainer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SPTX</title>
        <meta name="description" content="sptx assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid grid-cols-12 bg-black">
        <div className=" md:col-span-2">
          <Sidebar />
        </div>
        <div className=" md:col-span-7">
          <Center />
        </div>
        <div className=" md:col-span-3">
          <CustomLinkContainer />
        </div>
      </main>
    </div>
  );
};

export default Home;

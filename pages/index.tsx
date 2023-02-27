import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from '@next/font/google';
import styles1 from '../styles/home.module.scss';



// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles1.main}>
        <h1>test</h1>
 

      </main>
    </>
  );
}

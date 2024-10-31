// src/app/page.tsx
import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio website." />
      </Head>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.fadeIn}>Hello, I'm Sahil Kapadia</h1>
          <p className={styles.slideIn}>Health/MedTech Enthusiast | Software Engineer | Tech Enthusiast</p>
        </div>
      </section>
    </>
  );
}
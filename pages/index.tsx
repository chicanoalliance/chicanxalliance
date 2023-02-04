import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Willamette Chicano Alliance</title>
        <meta name="description" content="Willamette Chicano Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <center>
          <h3>Coming Soon</h3>
          <h1 className={styles.title}>Willamette Chicano Alliance</h1>
        </center>
      </main>
    </>
  );
}

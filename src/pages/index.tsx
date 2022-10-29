import { useEffect, useState, ReactElement } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import styles from "../styles/Home.module.css";
import AppLoader from "../components/generic/AppLoader";
import DefaultLayout from "../layouts/default";

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={`${styles.container} bg-primary`}>
      <Head>
        <title>Petadopt - React</title>
      </Head>

      {isLoading ? <AppLoader /> : <DefaultLayout>{page}</DefaultLayout>}
    </div>
  );
};


export default Home;

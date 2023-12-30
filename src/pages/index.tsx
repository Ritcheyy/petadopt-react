import { useEffect, useState, ReactElement } from "react";
import Head from "next/head";
import { NextPageWithLayout } from "../types/layout";
import styles from "../styles/home.module.css";
import AppLoader from "../components/generic/AppLoader";
import DefaultLayout from "../layouts/default";
import Pets from "../components/Pets";
import Categories from "../components/Categories";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Categories />
      <div className="2xl:w-10/12 w-11/12 m-auto">
        <Pets />
      </div>
    </>
  )
};

Home.getLayout = function getLayout(page: ReactElement) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="h-full">
      <Head>
        <title>Petadopt - React</title>
      </Head>

      {isLoading ? <AppLoader /> : <DefaultLayout>{page}</DefaultLayout>}
    </div>
  );
};


export default Home;

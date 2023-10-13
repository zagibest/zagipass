import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zagi Pass</title>
      </Head>
      <main className="flex flex-col min-h-screen container mx-auto md:w-11/12  lg:w-4/5 divide-y divide-black-500">
        <div className=" h-16 ">
          <Header />
        </div>
        <div className="flex-grow">
          <h1>Welcome to Zagi Pass</h1>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import homeStyles from '@/styles/Home.module.css';
import type { GetStaticProps, NextPage } from 'next';
import { getSortedPostsData } from '@/lib/post';

const inter = Inter({ subsets: ['latin'] });

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>CY Kim</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[CY Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headgingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

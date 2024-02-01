import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Van. I am a Computer Science undergraduate aspiring to grow my professional career in software development. </p>
        <p>My expectation in this internship is that I would be able to gain much learnings and be given the opportunity to apply them on the tasks that will be assigned to us. I'm also excited to be able to get a glimpse on the day-to-day life for this profession here at Twistresources.</p>
        <p>My impression so far is that it has great and welcoming environment. Our seniors were friendly and approachable. I believe I'll have a great time here as I learn.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const  getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });  

  return {
    props: {}
  }
}
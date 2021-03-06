import AOS from 'aos';
import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../lib/api'

import Portfolio from '../components/portfolio';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import PageHead from '../components/pageHead';
import {aosVariables} from '../lib/constants';

export default function Index({ allPosts }) {
  useEffect(() => {
    AOS.init(aosVariables.init)
  })

  return (
    <>
      <Layout>
        <PageHead />
        <Hero />
        <About />
        {allPosts.length && <Portfolio posts={allPosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'coverImage',
    'order',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}

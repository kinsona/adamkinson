import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AboutSection from '../components/about/index';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Adam Kinson"
      keywords={[
        `adam kinson`,
        `software engineer`,
        `web developer`,
        `community code`,
        `west hartford`,
        `connecticut`,
        `actuary`,
      ]}
    />
    <AboutSection />
  </Layout>
)

export default IndexPage

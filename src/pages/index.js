import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import About from 'sections/about';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/services';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import ProductsCard from 'sections/products';
import Partnerships from 'sections/partnerships';
import Faq from 'sections/faq';
import ContactUs from 'sections/contactus';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title='CixHub' />
          <Banner />
          <About />
          <Feature />
          <WorkFlow />
          {/* <ProductsCard /> */}
          <Partnerships />
          <ContactUs />
          {/* <CoreFeature /> */}

          {/* <Faq /> */}
          {/* <PartnerSection /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

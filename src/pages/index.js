import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/about';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/services';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Faq from 'sections/faq';
import ContactUs from 'sections/contactus';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title='CIXHUB' />
          <Banner />
          <KeyFeature />
          <Feature />
          <WorkFlow />
          <SecurePayment />
          <ContactUs />
          {/* <CoreFeature /> */}

          {/* <TestimonialCard />  to inclue when testimonials have been received*/} 

          {/* <Faq /> */}
          {/* <PartnerSection /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

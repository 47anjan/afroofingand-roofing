import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BeforeAfterSection from '@/sections/before-after';
import FeatureSection from '@/sections/feature';
import GallerySection from '@/sections/gallery';
import HeroSection from '@/sections/hero';
import StatsSection from '@/sections/stats';
import QuoteSection from '@/sections/quote';
import WhyChooseSection from '@/sections/why-choose';
import ContactForm from '@/sections/contact-form';
import FAQ from '@/sections/faq';
import ServeAreaSection from '@/sections/serve-area';
import Footer from '@/components/footer';
import ReviewSection from '@/sections/review';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className='min-h-screen w-full text-[#02050B]'>
      <Header />
      <HeroSection />
      <FeatureSection />
      <BeforeAfterSection />
      <WhyChooseSection />
      <QuoteSection />
      <GallerySection />
      <StatsSection />
      <ReviewSection />
      <ContactForm />
      <FAQ />
      <ServeAreaSection />
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  );
}

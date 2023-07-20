import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBanner from './HomeBanner'
import Midhome from './Midhome'
import OurSecrvices from '../components/OurSecrvices'
import ImgSection from './ImgSection'
import OurSocial from './OurSocial'
import Founder from './Founder'
import Testinimial from '../components/Testinimial'
import FooterMain from '../components/FooterMain'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Midhome />
      <OurSecrvices />
      <ImgSection />

      <Testinimial />
      <Founder />
   

      <OurSocial />
      <FooterMain/>
    </>
  )
}

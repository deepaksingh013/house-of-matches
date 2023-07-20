import React from 'react'
import MemberBanner from '../member/MemberBanner'
import OurSecrvices from '../components/OurSecrvices'
import Midhome from '../home/Midhome'
import MemberComp from './MemberComp'
import FooterMain from '../components/FooterMain'

export default function Services() {
  return (
    <>
      <MemberBanner />
      <Midhome />
      <OurSecrvices />
      <MemberComp />
      <FooterMain />
    </>
  )
}

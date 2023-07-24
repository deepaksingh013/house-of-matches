import React from 'react'
import MemberForm from './MemberForm'
import MemberBanner from './MemberBanner'
import Footer from '../components/Footer'
import FooterNew from '../components/FooterNew'
import Header from '../components/Header'
import CopyRight from '../components/CopyRight'

export default function Member() {
  return (
    <>
  
      <MemberBanner />
      <MemberForm />
      <FooterNew/>
      <CopyRight/>
    </>
  )
}

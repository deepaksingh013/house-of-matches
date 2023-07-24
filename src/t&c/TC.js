import React from 'react'
import TcContent from './TcContent'
import MemberBanner from '../member/MemberBanner'
import Footer from '../components/Footer'
import FooterNew from '../components/FooterNew'

export default function TC() {
  return (
    <div>
      <MemberBanner />
      <TcContent />
      <FooterNew/>
    </div>
  )
}

import React from 'react'
import MemberBanner from '../member/MemberBanner'
import FooterNew from '../components/FooterNew'
import ConfirmationContent from './ConfirmationContent'
import Header from '../components/Header'

export default function Confirmation() {
  return (
    <div>
      <Header/>
      <MemberBanner/>
      <ConfirmationContent/>
      <FooterNew/>
    </div>
  )
}

import React from 'react'
import MemberForm from './MemberForm'
import MemberBanner from './MemberBanner'
import Footer from '../components/Footer'

export default function Member() {
  return (
    <>
      <MemberBanner />
      <MemberForm />
      <Footer/>
    </>
  )
}

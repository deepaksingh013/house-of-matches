import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MemberBanner from './member/MemberBanner';
import Footer from './components/Footer';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import TC from './t&c/TC';
import MemberForm from './member/MemberForm';
import Member from './member/Member';
import Upload from './components/Upload';
import Home from './home/Home';
import Services from './services/Services';
import Listuser from './adminpanel/Listuser';
import Option from './member/Option';
// import MemberForm from './member/MemberForm';


function App() {
  return (
    <>
      <Header />

      {/* <Option/> */}
      {/* <Upload/> */}

      {/* <MemberForm/> */}
      <Routes>
        <Route path='/admin/listuser' element={<Listuser />} />
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/member' element={<Member />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/t&c' element={<TC />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

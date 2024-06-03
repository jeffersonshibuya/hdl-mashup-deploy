import AccountCategories from './pages/account-categories';
import ExamptionCategories from './pages/exemption-categories';
import AppraisedValue from './pages/appraised-value';
import PercentageCertified from './pages/percentage-certified';
import TopProperties from './pages/top-properties';
import Header from './components/header';
// import { useEffect, useState } from 'react';

function App() { 
  
  return (
    <>
      <Header />
      <div className='content-section back-color' id='percentageCertified'>
        <PercentageCertified />
      </div>
      <div className='content-section' id='accountCategories'>
        <AccountCategories />
      </div>
       <div className='content-section back-color' id='exemptionCategories'>
        <ExamptionCategories />
      </div>
      <div className='content-section' id='appraisedValue'>
        <AppraisedValue />
      </div>
      <div className='content-section back-color' id='topProperties'>
        <TopProperties />
      </div>
    </>
  )
}

export default App

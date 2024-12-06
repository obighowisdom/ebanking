import React from 'react'
import Hero from '../../../../components/Accounts/Hero'
import Content from "../../../../components/Accounts/Content";
import TopNav from '../../../../components/HomePage/TopNav';
import Header from '../../../../components/HomePage/Header';


const Account = () => {
  return (
    <div> <TopNav />
        <Header /><Hero /> <Content /></div>
  )
}

export default Account
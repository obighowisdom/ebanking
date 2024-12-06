'use client'
import React from 'react'
import Title from './Title'
import BankingServices from '../HomePage/Category';
import { GrStatusGood } from "react-icons/gr";
import Connect from '../HomePage/Connect'
import {AccordionDemo} from './Accordion'

const Content = () => {
  return (
    <div className="md:mx-[130px] mx-6 my-16 flex flex-col gap-6">
      <Title
        title="When your life becomes about more than just you"
        text="In today’s world, your life is full of more responsibilities and more
        choices to make, as well as more opportunities and more dreams to
        fulfil. From helping you manage the unexpected surprises life can throw
        your way to nurturing the prosperity of your family and planning for the
        future, Nexa Banking Online Premier is designed to help you thrive, all
        for no monthly fee. Eligibility criteria apply"
      />
      <BankingServices />
      <Title
        title="Eligibility Criteria"
        text="Ever green trust co Bank Premier is available to you, if you pay your annual income into your Nexa Banking Premier Nexa Banking Bank Account and have either:"
      />
      <div className='flex flex-col gap-3'>
        <div className="flex gap-5 items-start">
          <GrStatusGood size={20} color="red" />
          <p className="leading-[20px] text-[16px] font-bold text-black">
            savings or investments of at least £50,000 with Nexa Bank in the UK;
            or
          </p>
        </div>
        <div className="flex gap-5 items-start">
          <GrStatusGood size={20} color="red" />
          <p className="leading-[20px] text-[16px] font-bold text-black">
            an individual annual income of at least £75,000 and one of the
            following products with Nexa Bank in the UK: a
            mortgage, investment, life insurance or protection product.
          </p>
        </div>
          </div>
          <AccordionDemo />
          <Connect />
    </div>
  );
}

export default Content
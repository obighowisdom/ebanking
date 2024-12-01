import NavbarAndHero from '../../../components/Dashboard/Banner';
import TransactionTable from "../../../components/Dashboard/Table";
import React from 'react'

const Deposit = () => {
    return (
      <div>
        <NavbarAndHero title="Deposit" />
        <div className='my-14'>
          <TransactionTable />
        </div>
      </div>
    );
}

export default Deposit
import NavbarAndHero from "../../../components/Dashboard/Banner";
import WithdrawTable from "../../../components/Dashboard/Withdraw";

import React from 'react'

const Withdraw = () => {
    return (
      <div>
        <NavbarAndHero title="Withdrawal History" />
        <div className='my-14'>
          <WithdrawTable />
        </div>
      </div>
    );
}

export default Withdraw
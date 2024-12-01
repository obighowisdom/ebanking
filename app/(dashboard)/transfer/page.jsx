import NavbarAndHero from "@/components/Dashboard/Banner";
import TransferTable from "@/components/Dashboard/TransferTable";
import WithdrawTable from "@/components/Dashboard/Withdraw";

import React from "react";

const Transfer = () => {
  return (
    <div>
      <NavbarAndHero title="Transfer History" />
      <div className="my-14">
        <TransferTable />
      </div>
    </div>
  );
};

export default Transfer;

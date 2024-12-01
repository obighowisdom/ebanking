import NavbarAndHero from "../../../components/Dashboard/Banner";
import LoadingComponent from "../../../components/Dashboard/Loaders/LoadingState";

import React from "react";

const Tax = () => {
  return (
    <div>
      <NavbarAndHero title="Transfer History" />
          <LoadingComponent title='TAX Code' percent={61} stop={80} />
    </div>
  );
};

export default Tax;

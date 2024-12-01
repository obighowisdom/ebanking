import NavbarAndHero from "c../../../omponents/Dashboard/Banner";
import LoadingComponent from "../../../components/Dashboard/Loaders/LoadingState";

import React from "react";

const Processing = () => {
  return (
    <div>
      <NavbarAndHero title="Transfer History" />
     <LoadingComponent title='COT Code' percent={0} stop={20} />
    </div>
  );
};

export default Processing;

import NavbarAndHero from "../../../components/Dashboard/Banner";
import LoadingComponent from "../../../components/Dashboard/Loaders/LoadingState";

import React from "react";

const Processing = () => {
  return (
    <div>
      <NavbarAndHero title="Transfer History" />
     <LoadingComponent title='IMF Code' percent={21} stop={60} />
    </div>
  );
};

export default Processing;

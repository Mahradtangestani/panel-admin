
import React from "react";
import GuaranteeTable from "./GuaranteeTable";


const Guarantee = () => {
  return (
    <div
      id="manage_guarantee_section"
      className="manage_guarantee_section main_section"
    >
      <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
      <GuaranteeTable/>
    </div>
  );
};

export default Guarantee;


import React from "react";

const FormSection = ({ icon, title, children }) => (
  <div
    className="rounded-[5px] m-4 bg-ground text-primary-800 shadow-sm shadow-primary-400">
    <div className="p-2">
      <h5 className=" flex items-center gap-2 text-lg border-b border-primary-400  mt-1">
        {icon}
        {title}
      </h5>
      {children}
    </div>
  </div>
);

export default FormSection;

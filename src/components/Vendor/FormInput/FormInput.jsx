import React from "react";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={name} className="flex items-center">
      {label}
    </label>
    <input
      type={type}
      className="form-control border border-primary-200 bg-white text-primary-800 outline-none"
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormInput;

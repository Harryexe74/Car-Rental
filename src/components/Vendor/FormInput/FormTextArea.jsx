import React from "react";

const FormTextArea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="form-group">
    <label
      htmlFor={name}
      className="title-color d-flex gap-1 border border-gray-400 align-items-center"
    >
      {label}
    </label>
    <textarea
      className="form-control"
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormTextArea;

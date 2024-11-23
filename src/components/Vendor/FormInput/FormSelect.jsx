import React from "react";

const FormSelect = ({ label, name, options, value, onChange, required }) => {
  const isArray = Array.isArray(options);
  const hasDocs = options?.doc && Array.isArray(options.doc);

  return (
    <div className="form-group">
      <label htmlFor={name} className="flex items-centre">
        {label}
      </label>
      <select
        className="form-control border border-primary-200 bg-white text-primary-800 outline-none"
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      >
        <option value="">Please select</option>

        {/* If options.doc is an array, use it */}
        {hasDocs ? (
          options.doc.map((option, index) => (
            <option key={index} value={option.id}>
              {option.name ? option.name : option.carType}
            </option>
          ))
        ) : isArray ? (
          /* If options itself is an array */
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          /* Default message if no options are available */
          <option value="">No car type found</option>
        )}
      </select>
    </div>
  );
};

export default FormSelect;

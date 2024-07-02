import React from "react";
import PropTypes from "prop-types";

const Input = ({
    id,
    name,
    type,
    autoComplete,
    required = false,
    value,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required={required}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
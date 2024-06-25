import React from "react";
import PropTypes from "prop-types";

const LoginInput = ({
    id,
    name,
    type,
    autoComplete,
    required,
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
            className={`mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${className}`}
            placeholder={placeholder}
        />
    );
};

LoginInput.propTypes = {
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

export default LoginInput;
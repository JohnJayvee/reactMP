import React from "react";
import PropTypes from "prop-types";


const Button = ({
  id,
  name,
  type = 'submit',
  value,
  onClick,
  className,
  children,
}) => {
  return (
    <>
      <button
        id={id}
        className={className}
        name={name}
        type={type}
        onClick={onClick}
        value={value}
      >
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,

};


export default Button
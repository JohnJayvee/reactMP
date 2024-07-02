import React from 'react'
import PropTypes from "prop-types";

const Textarea = ({
  id,
  className,
  name,
  placeholder,
  value,
  onChange
}) => {

  return (
    <>
      <textarea
        id={id}
        name={name}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}

      >

      </textarea>
    </>
  );


}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string


};
export default Textarea
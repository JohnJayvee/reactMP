import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableText = ({ children, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);

  const text = showFullText ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <div>{children}</div>;

  return (
    <div>
      {showFullText ? `${text} ` : `${text}... `}
      {/* {text}...&nbsp; */}
      <button className='text-blue-700 hover:text-pink-700 hover:font-bold' onClick={() => setShowFullText((prevState) => !prevState)}>
        {showFullText ? 'Less' : 'See More'}
      </button>
    </div>
  );
};

ExpandableText.propTypes = {
  children: PropTypes.node.isRequired,
  maxChars: PropTypes.number
};

export default ExpandableText;


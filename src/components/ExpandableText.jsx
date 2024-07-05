import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableText = ({ children, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);

  const text = showFullText ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <div>{children}</div>;

  return (
    <div>
      {text}...
      <button className='bg-black text-red-700' onClick={() => setShowFullText((prevState) => !prevState)}>
        {showFullText ? 'less' : 'more'}
      </button>
    </div>
  );
};

ExpandableText.propTypes = {
  children: PropTypes.node.isRequired,
  maxChars: PropTypes.number
};

export default ExpandableText;


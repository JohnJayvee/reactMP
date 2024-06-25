import React from "react";
import PropTypes from "prop-types";


const Button = ({
    id,
    name,
    value,
    children,
    onClick,
    type,
    className,
}) => {
    return (
        <>
            <button
                id={id}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
                name={name}
                type={type}
                onClick={onClick}
                value={value}
            >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <svg className='h-5 w-5 text-blue-500 group-hover:text-blue-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                        <path fillRule='evenodd' d='M6 4v2H5a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3h-1V4a2 2 0 00-2-2H8a2 2 0 00-2 2zM5 9v4h10V9H5z' clipRule='evenodd' />
                    </svg>
                </span>
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
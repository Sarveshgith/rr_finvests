// src/components/ui/button.js
import React from 'react';

export const Button = ({ onClick, className, children, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-4 rounded text-white transition duration-200 ease-in-out hover:bg-purple-700 ${className}`}
        >
            {children}
        </button>
    );
};

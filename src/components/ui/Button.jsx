// src/components/ui/button.js
import React from 'react';

export const Button = ({ onClick, className, children }) => {
    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded text-white ${className}`}
        >
            {children}
        </button>
    );
};

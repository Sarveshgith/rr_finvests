// src/components/ui/input.js
import React from 'react';

export const Input = ({ type = "text", value, onChange, className, ariaLabel }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
            aria-label={ariaLabel} // Accessibility label
        />
    );
};

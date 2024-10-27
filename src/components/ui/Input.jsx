// src/components/ui/input.js
import React from 'react';

export const Input = ({ type, value, onChange, className }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={`border rounded p-2 ${className}`}
        />
    );
};

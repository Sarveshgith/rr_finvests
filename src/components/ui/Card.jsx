// src/components/ui/card.js
import React from 'react';

export const Card = ({ className, children }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children }) => {
    return (
        <div className="bg-gray-100 p-4">
            {children}
        </div>
    );
};

export const CardContent = ({ children, className }) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};

export const CardTitle = ({ children }) => {
    return (
        <h2 className="text-lg font-semibold text-gray-700">
            {children}
        </h2>
    );
};

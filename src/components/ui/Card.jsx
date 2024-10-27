// src/components/ui/card.js
import React from 'react';

export const Card = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children }) => {
    return <div className="border-b pb-2 mb-4">{children}</div>;
};

export const CardContent = ({ children }) => {
    return <div>{children}</div>;
};

export const CardTitle = ({ children }) => {
    return <h2 className="text-lg font-bold">{children}</h2>;
};

export default Card
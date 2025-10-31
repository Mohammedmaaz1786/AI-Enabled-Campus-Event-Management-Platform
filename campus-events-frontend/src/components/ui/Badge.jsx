import React from 'react';



export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantClasses = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
  };
  
  return <span className={`${variantClasses[variant]} ${className}`}>{children}</span>;
};


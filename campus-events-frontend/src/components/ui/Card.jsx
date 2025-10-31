import React from 'react';



export const Card = ({ children, hover = false, className = '' }) => {
  const classes = hover ? `card-hover ${className}` : `card ${className}`;
  
  return <div className={classes}>{children}</div>;
};



export const CardHeader = ({ children, className = '' }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};



export const CardBody = ({ children, className = '' }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};



export const CardFooter = ({ children, className = '' }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};


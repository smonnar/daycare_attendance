import React from 'react';

const CenteredLayout = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    padding: '20px',
    boxSizing: 'border-box'
  }}>
    {children}
  </div>
);

export default CenteredLayout;
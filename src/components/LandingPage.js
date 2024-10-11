import React from 'react';

const LandingPage = ({ onStart }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <img 
      src="https://palmettochristian.com/wp-content/uploads/sites/28/2020/03/PCL_Kidslogo_Blue.png" 
      alt="PCS Logo" 
      style={{ marginBottom: '2rem', maxWidth: '300px' }}
    />
    <button 
      onClick={onStart} 
      style={{ 
        fontSize: '1.5rem', 
        padding: '1rem 2rem', 
        backgroundColor: '#0056b3', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}
    >
      Touch here to begin
    </button>
  </div>
);

export default LandingPage;
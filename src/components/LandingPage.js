import React from 'react';
import CenteredLayout from './CenteredLayout';

const LandingPage = ({ onStart, buttonStyle }) => (
  <CenteredLayout>
    <img 
      src="https://palmettochristian.com/wp-content/uploads/sites/28/2020/03/PCL_Kidslogo_Blue.png" 
      alt="PCS Logo" 
      style={{ marginBottom: '2rem', maxWidth: '600px' }}
    />
    <button 
      onClick={onStart} 
      style={{ ...buttonStyle, fontSize: '1.5rem', padding: '1rem 2rem' }}
    >
      Touch anywhere to begin
    </button>
  </CenteredLayout>
);

export default LandingPage;
import React from 'react';
import CenteredLayout from './CenteredLayout';

const ClassroomSelection = ({ onSelect, buttonStyle }) => {
  const classrooms = ['Infants', 'K-1', 'K-2', 'K-3', 'K-4', 'VPK'];
  return (
    <CenteredLayout>
      <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Select a Classroom</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '600px' }}>
        {classrooms.map(classroom => (
          <button 
            key={classroom} 
            onClick={() => onSelect(classroom)} 
            style={buttonStyle}
          >
            {classroom}
          </button>
        ))}
      </div>
    </CenteredLayout>
  );
};

export default ClassroomSelection;
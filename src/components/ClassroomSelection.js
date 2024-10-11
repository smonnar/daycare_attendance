import React from 'react';

const ClassroomSelection = ({ onSelect }) => {
  const classrooms = ['Infants', 'K-1', 'K-2', 'K-3', 'K-4', 'VPK'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', padding: '1rem' }}>
      {classrooms.map(classroom => (
        <button 
          key={classroom} 
          onClick={() => onSelect(classroom)} 
          style={{ 
            fontSize: '1.25rem', 
            padding: '1rem', 
            backgroundColor: '#0056b3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          {classroom}
        </button>
      ))}
    </div>
  );
};

export default ClassroomSelection;
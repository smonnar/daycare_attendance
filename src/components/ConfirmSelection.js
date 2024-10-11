import React from 'react';

const ConfirmSelection = ({ selectedStudents, onConfirm }) => (
  <div style={{ padding: '1rem' }}>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Selected Students:</h2>
    <ul style={{ marginBottom: '1rem' }}>
      {selectedStudents.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
    <p style={{ marginBottom: '1rem' }}>Do you want to select another child?</p>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <button 
        onClick={() => onConfirm(true)} 
        style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#0056b3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Yes, select more
      </button>
      <button 
        onClick={() => onConfirm(false)} 
        style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#0056b3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        No, proceed to signature
      </button>
    </div>
  </div>
);

export default ConfirmSelection;
import React from 'react';
import CenteredLayout from './CenteredLayout';

const ConfirmSelection = ({ selectedStudents, onConfirm, buttonStyle }) => (
  <CenteredLayout>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Selected Students:</h2>
    <ul style={{ marginBottom: '1rem', listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
      {selectedStudents.map(student => (
        <li key={student.id} style={{ marginBottom: '0.5rem' }}>{student.name}</li>
      ))}
    </ul>
    <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Do you want to select another child?</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <button 
        onClick={() => onConfirm(true)} 
        style={buttonStyle}
      >
        Yes, select more
      </button>
      <button 
        onClick={() => onConfirm(false)} 
        style={buttonStyle}
      >
        No, proceed to signature
      </button>
    </div>
  </CenteredLayout>
);

export default ConfirmSelection;
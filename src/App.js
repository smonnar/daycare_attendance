import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ClassroomSelection from './components/ClassroomSelection';
import StudentSelection from './components/StudentSelection';
import ConfirmSelection from './components/ConfirmSelection';
import SignaturePad from './components/SignaturePad';
import { initInactivityTimer } from './utils/inactivityTimer';

// Common button style
const commonButtonStyle = {
  fontSize: '1.2rem',
  padding: '0.8rem 1.5rem',
  margin: '0.5rem',
  backgroundColor: '#009CDE',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  minWidth: '200px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#007ab1',
  },
  '&:active': {
    backgroundColor: '#005a8e',
  },
};

const App = () => {
  const [step, setStep] = useState('landing');
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const resetTimer = initInactivityTimer(() => {
      setStep('landing');
      setSelectedClassroom(null);
      setSelectedStudents([]);
    }, 60000); // 1 minute

    return () => resetTimer();
  }, []);

  const handleStart = () => setStep('classroom');
  
  const handleClassroomSelect = (classroom) => {
    setSelectedClassroom(classroom);
    setStep('students');
  };
  
  const handleStudentSelect = (students) => {
    setSelectedStudents(prev => {
      const newSelections = students.filter(student => !prev.some(s => s.id === student.id));
      return [...prev, ...newSelections];
    });
    setStep('confirm');
  };
  
  const handleConfirm = (selectMore) => {
    if (selectMore) {
      setSelectedClassroom(null);
      setStep('classroom');
    } else {
      setStep('signature');
    }
  };
  
  const handleSubmit = async (signature) => {
    try {
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: new Date(),
          students: selectedStudents,
          signature: signature
        }),
      });
      if (!response.ok) throw new Error('Submission failed');
      // Reset the app state
      setStep('landing');
      setSelectedClassroom(null);
      setSelectedStudents([]);
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleBack = () => {
    if (step === 'students') {
      setStep('classroom');
      setSelectedClassroom(null);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {step === 'landing' && <LandingPage onStart={handleStart} buttonStyle={commonButtonStyle} />}
      {step === 'classroom' && <ClassroomSelection onSelect={handleClassroomSelect} buttonStyle={commonButtonStyle} />}
      {step === 'students' && (
        <StudentSelection 
          classroom={selectedClassroom}
          onSelect={handleStudentSelect}
          onBack={handleBack}
          buttonStyle={commonButtonStyle}
        />
      )}
      {step === 'confirm' && (
        <ConfirmSelection
          selectedStudents={selectedStudents}
          onConfirm={handleConfirm}
          buttonStyle={commonButtonStyle}
        />
      )}
      {step === 'signature' && <SignaturePad onSubmit={handleSubmit} buttonStyle={commonButtonStyle} />}
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ClassroomSelection from './components/ClassroomSelection';
import StudentSelection from './components/StudentSelection';
import ConfirmSelection from './components/ConfirmSelection';
import SignaturePad from './components/SignaturePad';
import { initInactivityTimer } from './utils/inactivityTimer';

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
    setSelectedStudents(prev => [...prev, ...students]);
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

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {step === 'landing' && <LandingPage onStart={handleStart} />}
      {step === 'classroom' && <ClassroomSelection onSelect={handleClassroomSelect} />}
      {step === 'students' && (
        <StudentSelection 
          classroom={selectedClassroom}
          onSelect={handleStudentSelect} 
        />
      )}
      {step === 'confirm' && (
        <ConfirmSelection
          selectedStudents={selectedStudents}
          onConfirm={handleConfirm}
        />
      )}
      {step === 'signature' && <SignaturePad onSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
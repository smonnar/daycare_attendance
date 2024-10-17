import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import CenteredLayout from './CenteredLayout';

const SignaturePad = ({ onSubmit, buttonStyle }) => {
  const sigCanvas = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please provide a signature');
      return;
    }
    setIsSubmitting(true);
    const signatureData = sigCanvas.current.toDataURL();
    setTimeout(() => {
      onSubmit(signatureData);
      setIsSubmitting(false);
    }, 2000); // 2 second delay for confirmation
  };

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  return (
    <CenteredLayout>
      <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Parent Signature</h2>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          style: { 
            border: '2px solid #ced4da', 
            borderRadius: '5px',
            width: '600px', 
            height: '200px' 
          }
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
        <button 
          onClick={handleClear}
          style={{ ...buttonStyle, backgroundColor: '#6c757d' }}
        >
          Clear Signature
        </button>
        <button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          style={{ 
            ...buttonStyle,
            backgroundColor: isSubmitting ? '#6c757d' : '#0056b3',
            cursor: isSubmitting ? 'not-allowed' : 'pointer' 
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {isSubmitting && (
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center', 
          padding: '10px', 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          borderRadius: '5px',
          fontSize: '1.2rem'
        }}>
          Submission successful! Returning to home page...
        </div>
      )}
    </CenteredLayout>
  );
};

export default SignaturePad;
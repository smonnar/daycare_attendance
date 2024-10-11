import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSubmit }) => {
  const sigCanvas = useRef(null);

  const handleSubmit = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please provide a signature');
      return;
    }
    const signatureData = sigCanvas.current.toDataURL();
    onSubmit(signatureData);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Parent Signature</h2>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          style: { 
            border: '2px solid #ced4da', 
            borderRadius: '5px',
            width: '100%', 
            height: '200px' 
          }
        }}
      />
      <button 
        onClick={handleSubmit} 
        style={{ 
          marginTop: '1rem', 
          padding: '0.5rem 1rem', 
          backgroundColor: '#0056b3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SignaturePad;
import React from 'react';


export default function PageError({ errorMessage }) {
  return (
    <div className="center-container">
      <pre>
        <h3 className="text-title-color">{errorMessage}</h3>
      </pre>
    </div>
  );
}


import React from 'react'
import './App.css';

function App() {
  return (
    <div className="widget">
      <common-check-widget
        data-backend-endpoint="http://localhost:4000/main"

        data-health-documents-url=""
        data-first-name=""
        data-last-name=""
        data-dob=""
        data-passport=""
        data-nationality=""
        data-flight-number=""
        data-flight-date=""
      />
    </div>
  );
}

export default App;

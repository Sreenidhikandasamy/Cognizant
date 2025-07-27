import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Bootcamp" status="ongoing" startDate="2025-06-01" endDate="2025-07-31" />
      <CohortDetails name="Java Fundamentals" status="completed" startDate="2025-05-01" endDate="2025-06-15" />
    </div>
  );
}

export default App;

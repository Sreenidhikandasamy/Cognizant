import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const GuestPage = () => (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book tickets.</p>
    </div>
  );

  const UserPage = () => (
    <div>
      <h2>Welcome, User!</h2>
      <p>Book your tickets.NOW!!!</p>
      <button>Book Now</button>
    </div>
  );

  
  const FlightDetails = () => (
    <div>
      <h3>Flight Details</h3>
      <ul>
        <li>Flight: AIR INDIA</li>
        <li>From: Chennai</li>
        <li>To: Delhi</li>
        <li>Time: 11:00 AM</li>
      </ul>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />

      <FlightDetails />

      <hr />
     
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;

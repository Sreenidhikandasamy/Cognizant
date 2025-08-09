import React from 'react';

// Inline CSS styles
const headingStyle = {
  textAlign: 'center',
  color: 'black',
  marginTop: '20px'
};

const imageStyle = {
  width: '80%',
  height: 'auto',
 display: 'block',
  margin: '0 auto',
  borderRadius: '10px'
};

// Office space list
const officeSpaces = [
  { name: 'Space X', rent: 50000, address: 'Chennai' },
  { name: 'Space Y', rent: 70000, address: 'Chennai' }
];

const App = () => {
  return (
    <div>
      {/* JSX Heading */}
      <h1 style={headingStyle}>Office Space Rental App</h1>

      {/* Image */}
      <img
        style={imageStyle}
        src="https://www.squareyards.com/rent/office-spaces-for-rent-in-chennai"
        alt="Office X"
      />
      <img
        style={imageStyle}
        src="https://www.vatikabusinesscentre.com/serviced-offices/"
        alt="Office Y"
      />

      {/* Office List */}
      <div style={{ padding: '20px' }}>
        {officeSpaces.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
              <p><strong>Name:</strong> {office.name}</p>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

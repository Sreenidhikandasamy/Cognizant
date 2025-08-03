import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleConvert = () => {
    const euroValue = parseFloat(rupees) / 90;
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div>
      <h2 style={{ color: 'blue', fontSize: '50px' }}>Currency Convertor!!</h2>


      <label>Amount: </label>
     
      <input
  type="text"
  value={rupees}
  onChange={(e) => setRupees(e.target.value)}
    placeholder="Enter amount in Rupees"
/>


      <br /><br />

      <label>In Euros: </label>
      <input
        type="text"
        value={euros}
        readOnly
      />

      <br /><br />

      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default CurrencyConvertor;

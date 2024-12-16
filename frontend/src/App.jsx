// App Component
import React, { useState } from 'react';
import InputField from './elements/InputField';
import Label from './elements/Label';

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Validation logic
    if (newValue.length > 10) {
      setError('Input must be at least 3 characters long');
    } else {
      setError('');
    }
  };

  return (
    <>
      <div>Do Start</div>
      <div className="flex flex-col">
      <Label
                labelText="Enter the full name"
                htmlFor="inputField"
                customClass="mb-2 text-sm font-medium text-gray-700"
            />
        <InputField
          id="inputField"
          name="inputField"
          value={value}
          handleChange={handleChange}
          placeholder="Enter text"
          type="text"
          customInputClass={`w-full p-2 border border-gray-300 rounded-lg ${
            error ? 'border-red-500' : ''
          }`}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    </>
  );
}

export default App;
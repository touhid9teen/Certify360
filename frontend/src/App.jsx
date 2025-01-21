import { useState } from 'react';
import InputField from './elements/inputField';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Parent Component</h1>
      <InputField
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
        label="Input Field"
      />
      <p className="mt-4">Current Value: {inputValue}</p>
    </div>
  );
};

export default App;
import  { useState } from 'react';
import InputField from './elements/InputField';
import Tooltip from './elements/Tooltip';

const App= () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4 flex flex-col item-center  max-w-lg ">
      <h1 className="text-2xl mb-4">App Component</h1>
      <Tooltip content="This is an input field" position={'top'}>
        <InputField
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputChange}
          label="Input Field"
        />
      </Tooltip>
      <p className="mt-4">Current Value: {inputValue}</p>
    </div>
  );
};

export default App;
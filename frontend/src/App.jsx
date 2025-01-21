import { useState } from 'react';
import Checkbox from './elements/Checkbox';

const App =() => {
  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
  });

  const handleCheckboxChange = ({ name, checked }) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <Checkbox
        id="checkbox1"
        initialChecked={checkboxStates.checkbox1}
        onChangeCheckbox={handleCheckboxChange}
        customClassCheckbox="border-gray-300 rounded"
        checkedOnLabel="Checked"
        checkedOffLabel="Unchecked"
      />
      <Checkbox
        id="checkbox2"
        initialChecked={checkboxStates.checkbox2}
        onChangeCheckbox={handleCheckboxChange}
        customClassCheckbox="border-gray-300 rounded"
        checkedOnLabel="Subscribed"
        checkedOffLabel="Unsubscribed"
      />
      <Checkbox
        id="checkbox3"
        initialChecked={checkboxStates.checkbox3}
        onChangeCheckbox={handleCheckboxChange}
        customClassCheckbox="border-gray-300 rounded"
        checkedOnLabel="Enabled"
        checkedOffLabel="Disabled"
      />
    </div>
  );
};

export default App;
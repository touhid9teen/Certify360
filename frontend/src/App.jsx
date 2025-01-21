import { useState } from 'react';
import Toggle from './elements/Toggle';

const App = () => {
  const [toggleStates, setToggleStates] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: false,
  });

  const handleToggleChange = ({ name, checked }) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <Toggle
        id="toggle1"
        name="toggle1"
        initialChecked={toggleStates.toggle1}
        onChangeToggle={handleToggleChange}
        customClass="border-gray-300 rounded"
        checkedOnLabel="Enabled"
        checkedOffLabel="Disabled"
      />
      <Toggle
        id="toggle2"
        name="toggle2"
        initialChecked={toggleStates.toggle2}
        onChangeToggle={handleToggleChange}
        customClass="border-gray-300 rounded"
        checkedOnLabel="Active"
        checkedOffLabel="Inactive"
      />
      <Toggle
        id="toggle3"
        name="toggle3"
        initialChecked={toggleStates.toggle3}
        onChangeToggle={handleToggleChange}
        customClass="border-gray-300 rounded"
        checkedOnLabel="On"
        checkedOffLabel="Off"
      />
    </div>
  );
};

export default App;
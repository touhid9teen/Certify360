import { useState } from 'react';
import Label from './elements/Label';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Label text="Username" htmlFor="username" labelStyle="text-blue-500" />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div className="mb-4">
        <Label text="Password" htmlFor="password" labelStyle="text-yellow-500" />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
      </div>
      
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
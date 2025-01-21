import React from 'react';
import ActionButton from './components/ActionButton';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const App= () => {
  const handleEdit = () => {
    alert('Edit action clicked');
  };

  const handleDelete = () => {
    alert('Delete action clicked');
  };

  const handleView = () => {
    alert('View action clicked');
  };

  const options = [
    { icon: <FaEdit />, text: 'Edit', onClick: handleEdit },
    { icon: <FaTrash />, text: 'Delete', onClick: handleDelete },
    { icon: <FaEye />, text: 'View', onClick: handleView },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Action Button Example</h1>
      <ActionButton options={options} />
    </div>
  );
};

export default App;
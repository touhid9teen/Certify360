import { useState } from 'react';

import Delete from  './assets/delete.png'
import ModalBody from './components/modal/ModalBody';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Modal Example</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <ModalBody
              content="This is the modal content."
              imageSrc= {Delete}
            />
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
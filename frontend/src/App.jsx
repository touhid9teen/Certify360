import { useState } from 'react';
import ModalHeader from './components/modal/ModalHeader';
import ModalBody from './components/modal/ModalBody';
import ModalFooter from './components/modal/ModalFooter';
import Delete from './assets/delete.png';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    alert('Submit action');
    closeModal();
  };

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
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <ModalHeader
              title="Modal Title"
              onClose={closeModal}
            />
            <ModalBody
              content="This is the modal content."
              imageSrc={Delete}
            />
            <ModalFooter
              primaryButtonText="Submit"
              onCancel={closeModal}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
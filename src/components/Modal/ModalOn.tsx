import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

export default function ModalOn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Main content of the page for MODAL</h1>

      {/* <button onClick={openModal}>Open modal</button> */}
      <Button variant="primary" text="Open modal" onClickBtn={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Custom Modal Content</h2>
          <p>This is a reusable modal with dynamic content.</p>
        </Modal>
      )}
    </div>
  );
}

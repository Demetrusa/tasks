import { useState } from "react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>

          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default ModalExample;
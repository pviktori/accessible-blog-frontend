// Modal.js - Reusable Modal Component
import { BasicModalProps } from "@/src/interfaces/BasicModal.interface";
import { useEffect } from "react";

const BasicModalLayout: React.FC<BasicModalProps> = ({ children, isOpen, onClose }) => {
  // Close modal when pressing the escape key
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default BasicModalLayout;

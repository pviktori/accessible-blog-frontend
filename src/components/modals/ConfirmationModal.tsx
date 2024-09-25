// Modal.js - Reusable Modal Component
import { BasicModalProps } from "@/src/interfaces/BasicModal.interface";
import { useEffect } from "react";
import BasicModalLayout from "./BasicModalLayout";

const ConfirmationModal = ({ isOpen, onClose }: BasicModalProps) => {
  return (
    <BasicModalLayout isOpen={isOpen} onClose={onClose}>
      ConfirmationModal
    </BasicModalLayout>
  );
};

export default ConfirmationModal;

// Modal.jsx
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    // Toggle body overflow when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40" onClick={onClose}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;

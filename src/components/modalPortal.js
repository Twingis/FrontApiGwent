"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./modalContent";

export default function ModalPortal({ infos }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="border-6" onClick={() => setShowModal(true)}>
        Éditer
      </button>
      {showModal &&
        createPortal(
          <ModalContent infos={infos} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

"use client";
import { modifyCard } from "@/serverActions/modifyCard";
import Form from "next/form";

export default function ModalContent({ onClose, infos }) {
  return (
    <div className="absolute inset-72">
      <Form
        action={modifyCard}
        className="inline align-top align-center border-3 border-pink-500 bg-pink-200 p-4"
      >
        <input
          className="inputText"
          type="input"
          id="name"
          name="name"
          defaultValue={infos.name}
        />
        <input
          className="inputText"
          type="text"
          id="faction"
          name="faction"
          defaultValue={infos.attributes.faction}
        />
        <button className="border-6 border-blue-400 m-1 p-0.5" type="submit">
          Valider
        </button>
        <button className="border-6 border-red-500 m-1 p-0.5" onClick={onClose}>
          Fermer
        </button>
      </Form>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFavorite } from "../redux/favoritesSlice";
import Button from "../components/Button";

const EditCharacterModal = ({ character, onClose }) => {
  const [gender, setGender] = useState(character.gender);
  const [height, setHeight] = useState(character.height);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateFavorite({ ...character, gender, height }));
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-brightness-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Character</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Height</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCharacterModal;
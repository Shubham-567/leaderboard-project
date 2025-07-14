import { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onAdd(name.trim());
    setName(""); // clearing input
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 items-center'>
      <input
        type='text'
        placeholder='Enter user name'
        className='border rounded p-2'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        type='submit'
        className='bg-blue-400 text-white px-4 py-2 rounded'>
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;

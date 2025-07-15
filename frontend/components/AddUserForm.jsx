import { useState } from "react";
import { UserRoundPlus } from "lucide-react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onAdd(name.trim());
    setName(""); // clearing input
  };

  return (
    <form onSubmit={handleSubmit} className='card'>
      <label className='card-heading flex items-center gap-2'>
        <UserRoundPlus className='size-5' /> Add User
      </label>

      <div className='flex items-center gap-2'>
        <input
          type='text'
          placeholder='Enter user name'
          className='bg-background border border-border rounded-md p-2 w-full'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type='submit'
          className='bg-black text-white px-4 py-2 rounded-md text-xl hover:bg-black/70'>
          +
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;

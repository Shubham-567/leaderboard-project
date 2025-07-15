import { useState } from "react";
import { UserRoundPlus } from "lucide-react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onAdd(name.trim());
    setName(""); // clearing input

    alert("User is added successfully");
  };

  return (
    <form onSubmit={handleSubmit} className='card'>
      <label className='card-heading flex-center' htmlFor='user-input'>
        <UserRoundPlus className='size-5' /> Add User
      </label>

      <div className='flex-center'>
        <input
          id='user-input'
          type='text'
          placeholder='Enter user name'
          className='input-box'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type='submit' className='btn-black'>
          +
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;

import { UserRound } from "lucide-react";

function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <div className='card'>
      <label className='card-heading flex-center' htmlFor='user-dropdown'>
        <UserRound className='size-5' />
        Select User
      </label>

      <select
        id='user-dropdown'
        className='user-dropdown'
        value={selectedUserId || ""}
        onChange={(e) => setSelectedUserId(e.target.value)}>
        <option value=''>Chose User</option>

        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelector;

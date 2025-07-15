import { UserRound } from "lucide-react";

function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <div className='card'>
      <label
        className='card-heading flex items-center gap-2 '
        htmlFor='user-dropdown'>
        <span>
          <UserRound className='size-5' />
        </span>
        Select User
      </label>

      <select
        id='user-dropdown'
        className='bg-background border border-border w-full rounded-md p-2 cursor-pointer'
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

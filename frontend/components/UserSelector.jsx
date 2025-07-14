function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <div>
      <label className='block text-sm font-medium'>Selected User</label>

      <select
        className='border rounded p-2'
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

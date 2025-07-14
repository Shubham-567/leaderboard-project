function ClaimHistory({ history, users }) {
  const getUserName = (id) => {
    const user = users.find((u) => u._id === id);

    return user ? user.name : "Unknown";
  };

  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Claim History</h2>

      <ul className='space-y-1 text-sm'>
        {history.map((entry, index) => (
          <li key={entry._id} className='border-b py-1'>
            <strong>{entry.userId.name} </strong>
            <strong>{entry.points}</strong> points on{" "}
            {new Date(entry.timeStamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClaimHistory;

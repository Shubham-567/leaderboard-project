const Leaderboard = ({ leaderboard }) => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Leaderboard</h2>

      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2 text-left'>Rank</th>
            <th className='border p-2 text-left'>User</th>
            <th className='border p-2 text-left'>Points</th>
          </tr>
        </thead>

        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user._id}>
              <td className='border p-2'>{index + 1}</td>
              <td className='border p-2'>{user.name}</td>
              <td className='border p-2'>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

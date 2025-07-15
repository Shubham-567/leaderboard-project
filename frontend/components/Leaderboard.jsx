import TopThree from "./TopThree";

const Leaderboard = ({ leaderboard }) => {
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  console.log(leaderboard);

  return (
    <div className='leaderboard'>
      <h2 className='leaderboard-heading'>Top Players</h2>

      {leaderboard.length === 0 && (
        <p className='leaderboard-notfound'>No users found</p>
      )}

      {topThree.length === 3 && <TopThree users={topThree} />}

      <div className='space-y-4 p-6'>
        {rest.map((user) => (
          <div key={user._id} className='flex-center'>
            <span className='leaderboard-rank'>{user.rank}</span>
            <img
              src={`https://randomuser.me/api/portraits/men/${user.rank}.jpg`}
              alt={user.name}
              className='size-8 rounded-full'
            />
            <span className='flex-1 font-medium'>{user.name}</span>
            <span className='text-sm text-gray-700'>
              {user.totalPoints.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

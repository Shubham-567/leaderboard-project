import TopThree from "./TopThree";

const Leaderboard = ({ leaderboard, isLoading }) => {
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className='leaderboard'>
      <h2 className='leaderboard-heading'>Top Players</h2>

      {isLoading && <p className='leaderboard-notfound'>Loading...</p>}

      {leaderboard.length === 0 && !isLoading && (
        <p className='leaderboard-notfound'>No users found</p>
      )}

      {topThree.length === 3 && <TopThree users={topThree} />}

      <div className='space-y-4 p-6'>
        {rest.map((user) => (
          <div key={user.rank} className='flex-center'>
            <span className='leaderboard-rank text-xs sm:text-sm'>
              {user.rank}
            </span>
            <img
              src={`https://randomuser.me/api/portraits/men/${user.rank}.jpg`}
              alt={user.name}
              className='size-8 rounded-full'
            />
            <span className='flex-1 font-medium text-xs sm:text-sm'>
              {user.name}
            </span>
            <span className='text-xs sm:text-sm text-gray-700'>
              {user.totalPoints.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

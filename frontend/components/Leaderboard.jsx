import TopThree from "./TopThree";

const Leaderboard = ({ leaderboard }) => {
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  console.log(leaderboard);

  return (
    <div className='bg-card rounded-xl shadow-md mx-auto border border-border'>
      <h2 className='text-xl font-bold py-4 px-6 border-b-2 border-border'>
        Top Players
      </h2>

      {leaderboard.length === 0 && (
        <p className='text-center text-xl font-medium text-text-secondary mt-4'>
          No users found
        </p>
      )}

      {topThree.length === 3 && <TopThree users={topThree} />}

      <div className='space-y-4 p-6'>
        {rest.map((user) => (
          <div key={user._id} className='flex items-center gap-4'>
            <span className='w-6 text-sm text-text-secondary font-medium'>
              {user.rank}
            </span>
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

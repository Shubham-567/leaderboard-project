const Medal = ({ rank }) => {
  const medalColors = {
    1: "bg-yellow-400 text-yellow-700",
    2: "bg-gray-300 text-gray-700",
    3: "bg-orange-400 text-orange-700",
  };

  return (
    <div
      className={`size-6 rounded-full flex items-center justify-center text-xs font-bold shadow ${medalColors[rank]}`}>
      {rank}
    </div>
  );
};

function TopThree({ users }) {
  const positions = [1, 0, 2]; // 1st rank in center

  return (
    <div className='flex justify-around items-end sm:gap-10 mb-8 mt-8'>
      {positions.map((pos) => {
        const user = users[pos];
        const isTop = pos === 0;

        return (
          <div
            key={user._id}
            className={`flex flex-col items-center ${
              isTop ? "scale-130 py-6" : ""
            }`}>
            <div className='relative mb-2'>
              <img
                src={`https://randomuser.me/api/portraits/men/${user.rank}.jpg`}
                alt={user.name}
                className={`size-14 sm:size-20 md:size-24 rounded-full border-4 ${
                  user.rank === 1
                    ? "border-yellow-400"
                    : user.rank === 2
                    ? "border-gray-300"
                    : "border-orange-400"
                }`}
              />
              <div className='absolute bottom-0'>
                <Medal rank={user.rank} />
              </div>
            </div>
            <div className='text-sm font-bold'>{user.name}</div>
            <div
              className={`text-xs ${
                user.rank === 0
                  ? "font-bold text-yellow-500"
                  : "text-text-secondary"
              }`}>
              {user.totalPoints.toLocaleString()} pts
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopThree;

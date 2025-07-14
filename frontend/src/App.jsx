import { useState } from "react";
import { getHistory, getLeaderboard, getUsers } from "../services/api";
import { useEffect } from "react";

import UserSelector from "../components/UserSelector";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchAllData = async () => {
    const [usersRes, leaderboardRes, historyRes] = await Promise.all([
      getUsers(),
      getLeaderboard(),
      getHistory(),
    ]);

    setUsers(usersRes);
    setLeaderboard(leaderboardRes);
    setHistory(historyRes);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <main className='p-4 max-w-4xl mx-auto space-y-6'>
      <h1 className='text-3xl font-bold '>Leaderboard App</h1>

      <section className='flex gap-4 items-end'>
        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
      </section>
    </main>
  );
}

export default App;

import { useState } from "react";
import {
  getHistory,
  getLeaderboard,
  getUsers,
  addUser,
  claimPoints,
} from "../services/api";
import { useEffect } from "react";

import UserSelector from "../components/UserSelector";
import AddUserForm from "../components/AddUserForm";
import Leaderboard from "../components/Leaderboard";
import ClaimHistory from "../components/ClaimHistory";
import ClaimButton from "../components/ClaimButton";

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

  const handleAddUser = async (name) => {
    await addUser(name);
    fetchAllData();
  };

  const handleClaim = async () => {
    if (!selectedUserId) return;

    await claimPoints(selectedUserId);
    fetchAllData();
  };

  return (
    <main className='p-4 max-w-4xl mx-auto space-y-6'>
      <h1 className='text-3xl font-bold '>Leaderboard App</h1>
      <section className='flex gap-4 items-end'>
        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />

        <ClaimButton onClick={handleClaim} />
      </section>
      <AddUserForm onAdd={handleAddUser} />
      <Leaderboard leaderboard={leaderboard} />
      <ClaimHistory history={history} users={users} />
    </main>
  );
}

export default App;

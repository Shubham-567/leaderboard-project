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
import ClaimButton from "../components/ClaimPoints";
import ClaimPoints from "../components/ClaimPoints";

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
    <main className='p-6 max-w-7xl min-h-screen border border-border bg-background rounded-xl mx-auto my-5'>
      <h1 className='text-5xl text-center font-semibold'>Leaderboard</h1>
      <p className='text-lg text-center text-text-secondary'>
        Track your points and climb the ranks.
      </p>

      <div className='flex'>
        {/* Left Side: User Selector, Add User Form, Claim Button, Claim History */}
        <section className='flex flex-col gap-4 justify-center w-3/10 mt-6 px-4'>
          <UserSelector
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />

          <ClaimPoints onClick={handleClaim} />
          <AddUserForm onAdd={handleAddUser} />
          <ClaimHistory history={history} users={users} />
        </section>

        {/* Right Side: Leaderboard */}
        <section className='w-7/10'>
          <Leaderboard leaderboard={leaderboard} />
        </section>
      </div>
    </main>
  );
}

export default App;

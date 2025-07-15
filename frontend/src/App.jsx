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
    if (!selectedUserId) {
      alert("Please select a user");

      return;
    }

    await claimPoints(selectedUserId);

    fetchAllData();

    alert("Points claimed successfully");
  };

  return (
    <main className='main-container'>
      <h1 className='text-4xl text-center font-semibold'>Leaderboard</h1>
      <p className='text-center text-text-secondary'>
        Track your points and climb the ranks.
      </p>

      <div className='section-wrapper'>
        {/* Left Side: User Selector, Add User Form, Claim Button, Claim History */}
        <section className='section-left'>
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
        <section className='w-full px-4'>
          <Leaderboard leaderboard={leaderboard} />
        </section>
      </div>
    </main>
  );
}

export default App;

import { History } from "lucide-react";
import { timeAgo } from "../services/timeAgo";

function ClaimHistory({ history }) {
  return (
    <div className='card'>
      <h2 className='card-heading flex-center'>
        <History className='size-5' />
        Claim History
      </h2>

      <ul className='space-y-2 text-xs'>
        {history.slice(0, 6).map((entry) => (
          <li key={entry._id} className='history-entry-text'>
            <span>
              {entry.userId.name} claimed {""}
              <span className='font-semibold'>+{entry.points}</span> points
            </span>

            <span className='text-text-secondary'>
              {timeAgo(entry.timeStamp)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClaimHistory;

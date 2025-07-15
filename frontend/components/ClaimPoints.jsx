import { Medal } from "lucide-react";

function ClaimPoints({ onClick }) {
  return (
    <div className='card'>
      <label className='card-heading block text-center' htmlFor='claim-points'>
        Ready to Score?
      </label>

      <button id='claim-points' onClick={onClick} className='btn-primary'>
        <span className='flex justify-center items-center gap-2'>
          <Medal className='size-4.5' />
          Claim Points
        </span>
      </button>
    </div>
  );
}

export default ClaimPoints;

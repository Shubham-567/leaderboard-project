import { Medal } from "lucide-react";

function ClaimPoints({ onClick }) {
  return (
    <div className='card'>
      <label className='card-heading text-center'>Ready to Score?</label>

      <button
        onClick={onClick}
        className='w-full bg-primary text-text-primary font-semibold text-center px-4 py-2.5 rounded-full hover:bg-primary/90'>
        <span className='flex justify-center items-center gap-2'>
          <Medal className='size-4.5' />
          Claim Points
        </span>
      </button>
    </div>
  );
}

export default ClaimPoints;

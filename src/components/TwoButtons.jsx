import React from 'react';

const TwoButtons = () => {
  return (
    <div className='flex flex-col gap-6 mt-1'>
      <h5 className='font-medium text-[#1A181E] text-xl'>
        Transactions | This Month
      </h5>
      <div className='flex gap-3'>
        <button
          type='button'
          className='px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full'
        >
          Payout (22)
        </button>
        <button className='px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full'>
          Refunds (6)
        </button>
      </div>
    </div>
  );
};

export default TwoButtons;

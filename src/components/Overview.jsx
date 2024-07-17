const Overview = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-medium text-xl'>Overview</h1>
      <button className='bg-white rounded-md border px-4 py-1.5 text-[#4d4d4d] flex justify-between items-center gap-3'>
        <span className='tracking-normal'>This Month</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='size-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m19.5 8.25-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default Overview;

import speaker from '../icons/speaker.png';

const Navbar = () => {
  return (
    <nav className='w-full border-b flex justify-between items-center py-3 px-8 sticky top-0 bg-white'>
      <div className='flex justify-center items-center gap-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='3'
          stroke='currentColor'
          className='block md:hidden size-8 cursor-pointer'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>

        <h1 className='text-[#1a181e] text-xl font-medium tracking-wide'>
          Payouts
        </h1>

        <div className='flex justify-center items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            className='size-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
            />
          </svg>
          <p className='text-[#4d4d4d] text-xs tracking-normal'>How it works</p>
        </div>
      </div>

      <form className='w-[386px] hidden md:block'>
        <label
          for='search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none'>
            <svg
              className='w-3.5 h-3.5 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='search'
            className='block bg-[#f2f2f2] w-full px-4 py-[9px] ps-10 text-md text-gray-900 rounded-lg outline-none'
            placeholder='Search features, tutorials, etc.'
            required
          />
        </div>
      </form>

      <div className='flex gap-2'>
        <button className='text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center'>
          <img src={speaker} alt='img' />
        </button>
        <button className='text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 px-2 sm:w-10 sm:h-10 flex items-center justify-center'>
          <img
            src={'https://www.svgrepo.com/show/7882/down-arrow.svg'}
            className='h-[1em] w-[1em]'
            alt=''
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

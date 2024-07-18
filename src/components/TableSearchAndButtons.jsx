import { useContext, useEffect } from 'react';
import updown from '../icons/updown.png';
import { ToggleContext } from '../context/ToggleContext';
import { tableData } from '../data/table';

const TableSearchAndButtons = () => {
  const { search, setSearch, setTableDataState } = useContext(ToggleContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    filterData(value);
  };

  const filterData = (value) => {
    const filterSearchData = tableData.filter((data) => {
      return data.transactionId.includes(value) || data.orderId.includes(value);
    });

    setTableDataState(value ? filterSearchData : tableData);
  };

  useEffect(() => {
    filterData(search);
  }, [search]);
  return (
    <div className='flex justify-between'>
      <form className='w-[300px]'>
        <label
          htmlFor='search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none'>
            <svg
              className='w-3.5 h-3.5 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            className='block w-full px-4 py-1.5 border ps-10 text-md text-gray-900 rounded outline-none'
            placeholder='Order ID or transactions ID'
            value={search}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className='flex gap-3'>
        <button className='flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]'>
          Sort <img src={updown} alt='' />
        </button>

        <button className='flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TableSearchAndButtons;

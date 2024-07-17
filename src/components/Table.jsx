import { tableData } from '../data/table';
import { useState } from 'react';

const Table = () => {
  const [tableDataState] = useState(tableData);
  return (
    <div className='overflow-x-auto rounded-md'>
      <table className='w-full'>
        <colgroup>
          <col className='w-1/5' />
          <col className='w-1/5' />
          <col className='w-1/5' />
          <col className='w-1/5' />
          <col className='w-1/5' />
        </colgroup>
        <thead className='text-[#4D4D4D]'>
          <tr className='bg-[#F2F2F2]'>
            <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l'>
              Order ID
            </th>
            <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>
              Status
            </th>
            <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>
              Transaction ID
            </th>
            <th className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>
              Refund Date
            </th>
            <th className='px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r'>
              Order Amount
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-[#E6E6E6]'>
          {tableDataState.map((data) => (
            <tr className='text-sm' key={data.orderId}>
              <td className='px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium'>
                {data.orderId}
              </td>
              <td className='px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]'>
                <span
                  className={`${
                    data.status === 'Successful'
                      ? 'bg-green-500'
                      : 'bg-gray-400'
                  } w-[10px] h-[10px] rounded-full`}
                ></span>
                {data.status}
              </td>
              <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]'>
                {data.transactionId}
              </td>
              <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]'>
                {data.refundDate}
              </td>
              <td className='px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right'>
                {data.orderAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

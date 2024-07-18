import { useContext } from 'react';
import { ToggleContext } from '../context/ToggleContext';

const Table = () => {
  const { tableDataState } = useContext(ToggleContext);
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
            <TableHead sty={'rounded-l'}>Order ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Refund Date</TableHead>
            <TableHead sty={'rounded-r'}>Order Amount</TableHead>
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

const TableHead = ({ children, sty }) => {
  return (
    <th
      className={`px-3 py-[10px] text-left text-sm font-medium tracking-wider ${sty}`}
    >
      {children}
    </th>
  );
};

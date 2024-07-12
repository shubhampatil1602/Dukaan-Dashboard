import React from 'react';

const MenuList = ({ menuItem }) => {
  return (
    <div
      className={`${
        menuItem.name === 'Payouts' && 'bg-[#FFFFFF]/10'
      } flex w-full gap-3.5 rounded py-2 px-4 hover:bg-[#FFFFFF]/10`}
    >
      <img
        src={menuItem.icon}
        className='object-contain h-[1.125rem] w-[1.125rem]'
        alt={menuItem.name}
      />
      <p className='text-[#d2d4d9] font-medium text-sm'>{menuItem.name}</p>
    </div>
  );
};

export default MenuList;

const Card = ({
  title,
  money,
  customStyle,
  orders,
  orderStyle,
  payment,
  time,
}) => {
  return (
    <div className={`${customStyle} rounded-[8px] flex-grow min-w-[300px]`}>
      <h3 className='text-base flex gap-3 items-center pb-3 pt-5 px-5'>
        {title}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
          />
        </svg>
      </h3>

      <div className='flex justify-between mx-5 pb-5'>
        <h3 className='font-medium text-3xl'>₹{money}</h3>
        <p
          className={`${orderStyle} flex justify-center items-center font-medium text-base underline`}
        >
          {orders}{' '}
          {orders && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className={`size-5 ${orderStyle}`}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          )}
        </p>
      </div>

      {payment && time && (
        <div className='flex justify-between bg-[#0E4F82] rounded-[8px] py-2 px-6'>
          <p>{payment}</p>
          <p>{time}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

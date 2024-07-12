import home from '../icons/home.png';
import orders from '../icons/orders.png';
import products from '../icons/products.png';
import delivery from '../icons/delivery.png';
import marketing from '../icons/marketing.png';
import analytics from '../icons/analytics.png';
import payouts from '../icons/payouts.png';
import discounts from '../icons/discounts.png';
import audience from '../icons/audience.png';
import appearence from '../icons/appearence.png';
import plugins from '../icons/plugins.png';
import nishyan from '../icons/nishyan.svg';
import wallet from '../icons/wallet.svg';
import MenuList from './MenuList';

const Sidebar = () => {
  const menuLists = [
    {
      icon: home,
      name: 'Home',
    },
    {
      icon: orders,
      name: 'Orders',
    },
    {
      icon: products,
      name: 'Products',
    },
    {
      icon: delivery,
      name: 'Delivery',
    },
    {
      icon: marketing,
      name: 'Marketing',
    },
    {
      icon: analytics,
      name: 'Analytics',
    },
    {
      icon: payouts,
      name: 'Payouts',
    },
    {
      icon: discounts,
      name: 'Discounts',
    },
    {
      icon: audience,
      name: 'Audience',
    },
    {
      icon: appearence,
      name: 'Appearence',
    },
    {
      icon: plugins,
      name: 'Plugins',
    },
  ];
  return (
    <div className='hidden sticky left-0 top-0 bg-[#1E2640] text-white w-56 p-2 gap-3 h-screen lg:flex flex-col justify-between items-center'>
      <div className='w-full'>
        <div className='flex items-center justify-between p-2 mb-4 leading-5'>
          <div className='flex gap-3'>
            <img
              src={nishyan}
              alt='nishyan'
              className='rounded-lg'
              width={40}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '20%',
                cursor: 'pointer',
                height: '40px',
              }}
            />
            <div className='flex flex-col gap-1'>
              <h3 className='text-[0.9375rem] font-medium leading-[22px]'>
                Nishyan
              </h3>
              <p className='underline cursor-pointer text-[13px] leading-4 font-extralight text-[#d2d4d9]'>
                Visit Store
              </p>
            </div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='4'
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
        <div className='mt-2'>
          {menuLists.map((menuItem) => (
            <MenuList menuItem={menuItem} />
          ))}
        </div>
      </div>

      <div className='w-[92%] mb-3 bg-[#353c53] flex items-center rounded-md py-2 px-3 gap-3'>
        <div className='bg-[#FFFFFF]/10 h-9 px-2 flex items-center rounded-md'>
          <img src={wallet} alt='' className='m-0' />
        </div>
        <div className=''>
          <p className='text-[13px] font-light'>Available Credits</p>
          <p className='text-base font-medium'>224.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

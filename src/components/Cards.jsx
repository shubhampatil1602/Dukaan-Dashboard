import Card from './Card';

const Cards = () => {
  return (
    <div className='flex justify-center items-start gap-5 flex-wrap'>
      <Card
        title={'Next Payout'}
        money={'2,312.23'}
        customStyle={'hover:bg-[#0E4F82] bg-[#146EB4] text-white'}
        orders={'23 Orders'}
        payment={'Next Payment Date:'}
        time={'Today, 4:00PM'}
      />
      <Card
        customStyle={'bg-white text-black shadow'}
        title={'Amount Pending'}
        money={'92,312.20'}
        orders={'13 Orders'}
        orderStyle={'text-[#146eb4]'}
      />
      <Card
        customStyle={'bg-white text-black shadow'}
        title={'Amount Processed'}
        money={'23,92,312.19'}
      />
    </div>
  );
};

export default Cards;

import Cards from './Cards';
import Overview from './Overview';
import TwoButtons from './TwoButtons';
import Table from './Table';
import TableSearchAndButtons from './TableSearchAndButtons';
import Footer from './Footer';

const Hero = () => {
  return (
    <div
      className={`bg-[#fafafa] px-8 py-8 flex flex-col gap-y-6 overflow-x-scroll`}
    >
      <Overview />
      <Cards />
      <TwoButtons />

      <div className='bg-white rounded-md p-3 flex flex-col gap-3'>
        <TableSearchAndButtons />
        <Table />
      </div>

      <Footer />
    </div>
  );
};

export default Hero;

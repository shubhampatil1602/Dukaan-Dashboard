import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={`w-full lg:w-[85%]`}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;

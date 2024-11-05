import Navbar from './components/header/index';
import ViewHome from './components/Organism/home';

export default function Home() {
  return (
    <>
      <Navbar />
      <ViewHome />
      <img src="/bg.webp" className="h-[180vh] z-[-1] w-full absolute top-0 left-0" />
      <div className="h-screen z-[-1] w-full absolute top-0 left-0 bg-black opacity-[.06]"></div>
    </>
  );
}

/** @format */

import Hero from './components/hero/hero';
import AboutText from './components/abouttext/abouttext';
import HomeProduct from './components/homeproduct/homeproduct';
import HomeServices from './components/homeServices/homeservices';
import { OrbitingCirclesDemo } from './components/buttonGroup/buttongroup';

export default function Home() {
  return (
    <>
      <Hero />
      <OrbitingCirclesDemo />
      <AboutText />
      <HomeProduct />
      <HomeServices />
    </>
  );
}

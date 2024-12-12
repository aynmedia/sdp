/** @format */

import Hero from './components/hero/hero';
import AboutText from './components/abouttext/abouttext';
import HomeProduct from './components/homeproduct/homeproduct';
import HomeServices from './components/homeServices/homeservices';
import ButtonGroup from './components/buttonGroup/buttongroup';

export default function Home() {
  return (
    <>
      <Hero />
      <ButtonGroup />
      <AboutText />
      <HomeProduct />
      <HomeServices />
    </>
  );
}

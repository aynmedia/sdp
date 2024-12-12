/** @format */

import Hero from './components/hero/hero';
import AboutText from './components/abouttext/abouttext';
import HomeProduct from './components/homeproduct/homeproduct';
import HomeServices from './components/homeServices/homeservices';
import { OrbitingCirclesDemo } from './components/buttonGroup/buttongroup';
import Presence from './components/presence/presence';
import Calltoaction from './components/calltoaction/calltoaction';

export default function Home() {
  return (
    <>
      <Hero />
      <Calltoaction />
      <AboutText />
      <HomeProduct />
      <HomeServices />
      <OrbitingCirclesDemo />
      <Presence />
    </>
  );
}

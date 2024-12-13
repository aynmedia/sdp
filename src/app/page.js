/** @format */

import Hero from './components/hero/hero';
import AboutText from './components/abouttext/abouttext';
import HomeProduct from './components/homeproduct/homeproduct';
import HomeServices from './components/homeServices/homeservices';
import { OrbitingCirclesDemo } from './components/buttonGroup/buttongroup';
import Presence from './components/presence/presence';
import Calltoaction from './components/calltoaction/calltoaction';
import Homeslider from './components/homeslider';

export default function Home() {
  return (
    <>
      <Homeslider />
      <Hero />
      <AboutText />
      <HomeProduct />
      <HomeServices />
      <OrbitingCirclesDemo />
      <Presence />
    </>
  );
}

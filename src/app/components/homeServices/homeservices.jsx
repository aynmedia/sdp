/** @format */

import BentoGrid from '@/components/ui/bento-grid';
import sevices1 from '@/../public/images/services/SDP_Service1_Img1.webp';
import sevices2 from '@/../public/images/services/SDP_Service2_Img2.webp';
import sevices3 from '@/../public/images/services/SDP_Service3_Img3.webp';
import sevices4 from '@/../public/images/services/SDP_Service4_Img4.webp';
import sevices5 from '@/../public/images/services/SDP_Service5_Img5.webp';
import sevices6 from '@/../public/images/services/SDP_Service6_Img6.webp';
import sevices7 from '@/../public/images/services/SDP_Service7_Img7.webp';
import sevices8 from '@/../public/images/services/SDP_Service8_Img8.webp';
import sevices9 from '@/../public/images/services/SDP_Service9_Img9.webp';
import sevices10 from '@/../public/images/services/SDP_Service10_Img10.webp';
import sevices11 from '@/../public/images/services/SDP_Service11_Img11.webp';
import sevices12 from '@/../public/images/services/SDP_Service12_Img12.webp';
export default function Home() {
  const gridItems = [
    {
      image: sevices1,
      title: 'Inspection',
      colSpan: 2,
      rowSpan: 2,
      bgColor: 'bg-blue-100',
    },
    {
      image: sevices2,
      title: 'Spare Parts',
      bgColor: 'bg-green-100',
    },
    {
      image: sevices3,
      title: 'Replacements',
      bgColor: 'bg-red-100',
    },
    {
      image: sevices4,
      title: 'Service Agreement',
      colSpan: 2,
      bgColor: 'bg-purple-100',
    },
    {
      image: sevices5,
      title: 'Service Agreement',
      bgColor: 'bg-yellow-100',
      colSpan: 2,
    },
    {
      image: sevices6,
      title: 'Field Service',
      bgColor: 'bg-yellow-100',
    },
    {
      image: sevices7,
      title: 'Commisioning',
      bgColor: 'bg-yellow-100',
    },
    {
      image: sevices8,
      title: 'Maintenance',
      bgColor: 'bg-yellow-100',
      colSpan: 2,
    },
    {
      image: sevices9,
      title: 'Repair',
      bgColor: 'bg-yellow-100',
      colSpan: 2,
    },
    {
      image: sevices10,
      title: 'Technical Support',
      bgColor: 'bg-yellow-100',
      colSpan: 1,
    },
    {
      image: sevices11,
      title: 'In-House Services',
      bgColor: 'bg-yellow-100',
      colSpan: 2,
    },
    {
      image: sevices12,
      title: 'Rental Devices',
      bgColor: 'bg-yellow-100',
      colSpan: 1,
    },
  ];

  return (
    <div className='my-12 bg-gray-50 p-8'>
      <div className='max-w-7xl mx-auto'>
        {' '}
        <h1 className='text-3xl font-semibold my-8'>Services We Offer</h1>
        <h2 className='text-md text-black/60  my-8'>
          Global expertise, trusted solutions across diverse industries,
          delivering consistent performance and innovation worldwide.
        </h2>
        <BentoGrid items={gridItems} />
      </div>
    </div>
  );
}

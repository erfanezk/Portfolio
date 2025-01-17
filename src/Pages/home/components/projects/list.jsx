import React from 'react';
import ProjectCard from '@src/Pages/home/components/projects/card';

const list = [
  {
    title: 'Moneyro',
    description:
      'Moneyro is the first Iranian exchange and remittance platform, providing seamless financial services for tourism and global money transfers. With over\n' +
      '500,000 users and more than 50 partner locations across Turkey, United Arab Emirates, Russia and Iraq',
    url: 'https://tr.moneyro.app',
  },
  {
    title: 'ReportPlus',
    description:
      'ReportPlus is designed for building engineers. The platform enabled engineers to create detailed reports about buildings, upload images, and submit them\n' +
      'seamlessly to municipalities for review and compliance. Streamlined reporting processes and improved communication between engineers and municipal\n' +
      'authorities.',
    url: 'https://engineer.reportplus.ir/',
  },
  {
    title: 'Merooj',
    description:
      'Merooj is a well-established Iranian sportswear brand with a large customer base, known for its sponsorship of the Iranian national football team. The\n' +
      'company offers a wide range of athletic footwear and apparel, making a significant impact in the sports industry both locally and internationally.\n',
    url: 'https://majidshop.ir/',
  },
];

function ProductList() {
  return (
    <div className=" flex flex-wrap gap-4 items-center justify-around">
      {list.map((p) => (
        <ProjectCard {...p} key={p.title} />
      ))}
    </div>
  );
}

export default ProductList;

import React from 'react';
import {
  Animator,
  MoveIn,
  ScrollContainer,
  ScrollPage,
  ZoomIn,
} from 'react-scroll-motion';
import HomeProvider from '@src/Pages/home/context/provider';
import InteractiveText from '@src/Pages/home/components/interactive-text';
import Header from '@src/Pages/home/components/header';
import Typography from '@src/Components/typography';
import ELetter from '@src/Pages/home/components/letters/e';
import ImageViewer from '@src/Components/image-viewer';
import RLetter from '@src/Pages/home/components/letters/r';
import ProductList from '@src/Pages/home/components/projects/list';
import HomeFooter from '@src/Pages/home/components/footer';
import Show from '@src/Pages/home/components/show';

const HomePage = () => {
  console.log('home');
  return (
    <HomeProvider>
      <ScrollContainer>
        <ScrollPage key={'1'}>
          <Header />
          <div className="h-full relative z-50">
            <Show />
            <InteractiveText />
          </div>
        </ScrollPage>
        <ScrollPage key={'10'}>
          <Animator animation={MoveIn(-400, 0)}>
            <ELetter />
          </Animator>
        </ScrollPage>
        <ScrollPage key={'4'}>
          <Animator animation={ZoomIn(1)}>
            <div className={'flex gap-y-4 flex-col items-center justify-start'}>
              <div>
                <Typography variant={'h2'}>
                  You are reading about me✨
                </Typography>
              </div>
              <ImageViewer url={'/portfolio/resume.png'} />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage key={'8'}>
          <Animator animation={MoveIn(400, 0)}>
            <div className={'grid place-content-center'}>
              <RLetter />
            </div>
          </Animator>
        </ScrollPage>
        <div>
          <ProductList />
        </div>
      </ScrollContainer>
      <div className={'mt-8'}>
        <HomeFooter />
      </div>
    </HomeProvider>
  );
};

export default HomePage;

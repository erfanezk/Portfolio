import React from 'react';
import {
  Animator,
  MoveIn,
  ScrollContainer,
  ScrollPage,
  ZoomIn,
} from 'react-scroll-motion';
import Show from '@src/Pages/home/components/show';
import HomeProvider from '@src/Pages/home/context/provider';
import InteractiveText from '@src/Pages/home/components/interactive-text';
import Header from '@src/Pages/home/components/header';
import Typography from '@src/Components/typography';
import ELetter from '@src/Pages/home/components/letters/e';
import ImageViewer from '@src/Components/image-viewer';
import RLetter from '@src/Pages/home/components/letters/r';
import ProductList from '@src/Pages/home/components/projects/list';
import HomeFooter from '@src/Pages/home/components/footer';

const HomePage = () => {
  return (
    <HomeProvider>
      <ScrollContainer>
        <ScrollPage>
          <Header />
          <div className="h-full relative z-50">
            <Show />
            <InteractiveText />
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={MoveIn(-400, 0)}>
            <ELetter />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomIn(1)}>
            <div className={'flex gap-y-4 flex-col items-center justify-start'}>
              <div>
                <Typography variant={'h2'}>
                  You are reading about me✨
                </Typography>
              </div>
              <ImageViewer url={'/resume.png'} />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
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

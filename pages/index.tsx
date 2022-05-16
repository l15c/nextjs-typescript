import { Seo } from '@/components/common';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Tutorials | L15C',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://nextjs-typescript-iota.vercel.app/',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs-1200x733.png',
        }}
      />

      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;

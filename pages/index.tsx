import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;

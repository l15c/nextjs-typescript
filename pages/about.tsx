import { AdminLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About page
      </Typography>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

import { LayoutProps } from '@/models';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}

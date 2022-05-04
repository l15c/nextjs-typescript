import { Work } from '@/models';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Article } from './article';

export function FeaturedWorks() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      createdAt: '1650454555952',
      updatedAt: '1650454555952',
      tagList: ['Design', 'Pattern'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      createdAt: '1650454555952',
      updatedAt: '1650454555952',
      tagList: ['Figma', 'Icon Design'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
    },
  ];
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography lineHeight="60px" variant="h5" textAlign={{ xs: 'center', md: 'left' }}>
          Featured Works
        </Typography>
        <Stack direction="column">
          <Article />
          <Article />
          <Article />
        </Stack>
      </Container>
    </Box>
  );
}

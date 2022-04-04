import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Article } from './article';

export function FeaturedWorks() {
  return (
    <Box component="section" pt={2} pb={9}>
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

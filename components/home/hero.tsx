import avatar from '@/images/avatar.jpg';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={8}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold">
              Hi, I am L15C, <br />
              ...
            </Typography>

            <Typography my={{ xs: 3, md: 5 }}>
              Amet minim mollit non deserunt ullamco sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exeritation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <Image priority src={avatar} layout="responsive" alt="Avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

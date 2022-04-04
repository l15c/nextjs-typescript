import avatar from '@/images/avatar.jpg';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export interface ArticleProps {}

export function Article(props: ArticleProps) {
  return (
    <Box mb={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} mb={2}>
        <Box
          sx={{
            minWidth: { xs: '340px', md: '246px' },
            height: { xs: '230px', md: '160px' },
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <Image priority src={avatar} layout="responsive" alt="Avatar" />
        </Box>
        <Stack direction="column" ml={2}>
          <Typography variant="h5" fontWeight="bold" pt={{ xs: 2, md: 0 }}>
            Designing Dashboards
          </Typography>
          <Stack direction="row" py={2}>
            <Box bgcolor="black" px={1} borderRadius={4} width="62px" textAlign="center">
              <Typography fontWeight="900" color="white">
                2020
              </Typography>
            </Box>
            <Typography ml={3} color="#8695A4">
              Dashboard
            </Typography>
          </Stack>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}

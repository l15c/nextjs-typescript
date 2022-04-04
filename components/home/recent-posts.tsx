import { Box, Container, Stack, Typography, Link as MuiLink, Card } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';

export function RecentPosts() {
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          mb={2}
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link passHref href="/blog">
            <MuiLink
              sx={{
                display: { xs: 'none', md: 'inline', color: '#00a8cc' },
              }}
            >
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: { xs: '100%', md: '50%' },
            },
          }}
        >
          <Box>
            <PostCard
              title="Making a design system from scratch"
              date="12 Feb 2020"
              author="Design, Pattern"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </Box>

          <Box>
            <PostCard
              title="Creating pixel perfect icons in Figma"
              date="12 Feb 2020"
              author="Figma, Icon Design"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

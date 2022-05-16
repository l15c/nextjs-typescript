import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    { icon: Facebook, url: 'http://google.com' },
    { icon: Instagram, url: 'http://google.com' },
    { icon: Twitter, url: 'http://google.com' },
    { icon: LinkedIn, url: 'http://google.com' },
  ];

  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack spacing={2} direction="row" justifyContent="center" pb={3}>
        {socialLinks.map((item, idx) => (
          <Box key={idx} component="a" href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  );
}

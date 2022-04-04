import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Stack
      justifyContent="center"
      direction="column"
      component="footer"
      height="182px"
      textAlign="center"
    >
      <Stack spacing={2} direction="row" justifyContent="center" pb={3}>
        <Facebook />
        <Instagram />
        <Twitter />
        <LinkedIn />
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Stack>
  );
}

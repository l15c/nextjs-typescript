import { Box } from '@mui/material';
import * as React from 'react';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}

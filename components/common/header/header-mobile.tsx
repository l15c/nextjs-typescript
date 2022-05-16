import { Home, HomeRepairService, Menu, Newspaper } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function handleDrawerOpen() {
    setOpen(true);
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <Stack
      display={{ xs: 'flex', md: 'none' }}
      alignItems="end"
      justifyContent="center"
      height="50px"
    >
      <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}>
        <Menu sx={{ mr: 2 }} />
      </IconButton>
      <Box ref={ref}>
        <Drawer anchor="right" open={open}>
          <List>
            <Link passHref href="/">
              <ListItem>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            <Link passHref href="/works">
              <ListItem>
                <ListItemIcon>
                  <HomeRepairService />
                </ListItemIcon>
                <ListItemText primary="Works" />
              </ListItem>
            </Link>

            <Link passHref href="/blog">
              <ListItem>
                <ListItemIcon>
                  <Newspaper />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Box>
    </Stack>
  );
}

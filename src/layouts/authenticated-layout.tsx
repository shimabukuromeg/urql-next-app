import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { AppBar } from '@/src/components/Navigation/AppBar';
import { MenuDrawer } from '@/src/components/Navigation/MenuDrawer';
import { CommonLayout } from './common-layout';

export const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        <AppBar open={open} toggleDrawer={toggleDrawer} isAuth={true} />
        <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </CommonLayout>
  );
};

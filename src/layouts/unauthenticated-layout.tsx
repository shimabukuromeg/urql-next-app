import type { ReactNode } from 'react';
import { AppBar } from "@/src/components/AppBar";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export const UnauthenticatedLayout = ({
  children,
}: {
  children: ReactNode;
}) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar open={true} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Stack maxWidth="xl"
          height={'100%'}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          {children}
        </Stack>
      </Box>
    </Box>
  );
};

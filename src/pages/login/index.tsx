import { ReactElement } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';
import { UnauthenticatedLayout } from '@/src/layouts';
import type { NextPageWithLayout } from '@/src/pages/_app';
import { LoginForm } from '@/src/components/Form';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const ExtendPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: theme.spacing(8),
  borderRadius: '4px',
}));

const Index: NextPageWithLayout = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <ExtendPaper elevation={4}>
        <Typography variant="h2" fontSize="24px" fontWeight="bold" mb={4}>
          ログイン
        </Typography>
        <LoginForm />
      </ExtendPaper>
    </Stack>
  );
};

Index.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
);

export default Index;

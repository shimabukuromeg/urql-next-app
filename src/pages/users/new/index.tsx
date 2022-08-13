import { ReactElement } from 'react';
import { Stack, Box, Button, Typography, Paper } from '@mui/material';
import { AuthenticatedLayout } from '@/src/layouts/authenticated-layout';
import type { NextPageWithLayout } from '@/src/pages/_app';
import { NewUserForm } from '@/src/components/Form';
import { styled } from '@mui/material/styles';

const ExtendPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: theme.spacing(8),
  borderRadius: '4px',
}));

const Index: NextPageWithLayout = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h2">ユーザー追加</Typography>
      <ExtendPaper elevation={4}>
        <NewUserForm />
      </ExtendPaper>
    </Stack>
  );
};

Index.getLayout = (page: ReactElement) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);

export default Index;

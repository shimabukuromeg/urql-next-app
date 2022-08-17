import { ReactElement, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AuthenticatedLayout } from '@/src/layouts/authenticated-layout';
import type { NextPageWithLayout } from '@/src/pages/_app';
import { EnhancedTable } from '@/src/components/Table/EnhancedTable';
import { FormDialog } from '@/src/components/Dialog';

const Index: NextPageWithLayout = () => {
  return (
    <Stack spacing={2}>
      <FormDialog />
      <Typography variant="h2">ユーザー一覧</Typography>
      <EnhancedTable />
    </Stack>
  );
};

Index.getLayout = (page: ReactElement) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);

export default Index;

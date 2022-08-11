import type { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Box>
      <Typography variant="h2">TOPページ</Typography>
      <Button variant="contained" color="primary">
        ボタン
      </Button>
    </Box>
  );
};

export default Home;

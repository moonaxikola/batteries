import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const NotionEditorLoading: FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default NotionEditorLoading;

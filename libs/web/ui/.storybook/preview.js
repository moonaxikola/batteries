import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material';

import { getTheme } from '../src';

export const decorators = [
  Story => (
    <ThemeProvider theme={getTheme('dark')}>
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    </ThemeProvider>
  ),
];

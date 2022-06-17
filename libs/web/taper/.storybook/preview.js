import { getTheme } from '@moonaxikola/web/ui';
import { TaperGlobalStyles } from '../src/lib/components';
import { ThemeProvider } from '@mui/material';


export const decorators = [
  Story => (
    <ThemeProvider theme={getTheme('dark')}>
      <TaperGlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

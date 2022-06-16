import { muiTheme } from 'storybook-addon-material-ui5';
import { SnackbarProvider } from 'notistack';

export const decorators = [
  muiTheme(),
  Story => (
    <SnackbarProvider>
      <Story />
    </SnackbarProvider>
  ),
];

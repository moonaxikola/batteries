import { Theme } from '@mui/material/styles';

// eslint-disable-next-line no-unused-vars
export default function link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
}

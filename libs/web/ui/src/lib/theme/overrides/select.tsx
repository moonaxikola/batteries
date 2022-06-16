import { Theme } from '@mui/material/styles';

import { InputSelectIcon } from './custom-icons';

// eslint-disable-next-line no-unused-vars
export default function selectStyles(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}

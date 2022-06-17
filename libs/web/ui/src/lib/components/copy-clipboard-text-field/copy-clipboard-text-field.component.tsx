import { FC } from 'react';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip, TextField, IconButton, InputAdornment } from '@mui/material';
import { CloneDuotone } from '@moonaxikola/web/icons';

import type { CopyClipboardTextFieldProps } from './copy-clipboard-text-field.types';

const CopyClipboardTextField: FC<CopyClipboardTextFieldProps> = ({ value, message = 'Copied', ...other }) => {
  const { enqueueSnackbar } = useSnackbar();

  const onCopy = () => {
    enqueueSnackbar(message);
  };

  return (
    <TextField
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={value} onCopy={onCopy}>
              <Tooltip title="Copy">
                <IconButton>
                  <CloneDuotone width={24} height={24} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
};

export default CopyClipboardTextField;

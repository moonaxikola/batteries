import { ReactNode } from 'react';
import { Editor } from '@tiptap/core';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface BubbleMenuProps {
  editor: Editor;
  children: ReactNode;
}

export interface BubbleMenuButtonProps {
  active?: boolean;
  name: string;
  shortcut?: string;
  command: () => boolean;
  icon: OverridableComponent<SvgIconTypeMap>;
}

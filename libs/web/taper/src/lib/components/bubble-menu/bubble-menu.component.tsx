import { FC } from 'react';
import { BubbleMenu as BubbleMenuContainer } from '@tiptap/react';

import { BubbleMenuProps } from './bubble-menu.types';

const BubbleMenu: FC<BubbleMenuProps> = ({ editor, children }) => {
  return (
    <BubbleMenuContainer
      editor={editor}
      tippyOptions={{
        duration: 100,
        theme: 'moona',
        animation: 'scale',
        arrow:
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
      }}
    >
      {children}
    </BubbleMenuContainer>
  );
};

export default BubbleMenu;

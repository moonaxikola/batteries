import { FC } from 'react';
import {
  BoldRegular,
  CodeRegular,
  HighlighterRegular,
  ItalicRegular,
  LinkRegular,
  StrikethroughRegular,
} from '@moonaxikola/web/icons';

import { createShortcutLabel } from '../../utils';
import { BubbleMenu, BubbleMenuButton } from '../../components';
import { NotionEditorBubbleMenuProps } from './notion-editor.types';

const NotionEditorBubbleMenu: FC<NotionEditorBubbleMenuProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu editor={editor}>
      <BubbleMenuButton
        active={editor.isActive('bold')}
        name="Bold"
        shortcut={createShortcutLabel('Mod', 'B')}
        command={() => editor.chain().focus().toggleBold().run()}
        icon={BoldRegular}
      />
      <BubbleMenuButton
        active={editor.isActive('italic')}
        name="Italic"
        shortcut={createShortcutLabel('Mod', 'I')}
        command={() => editor.chain().focus().toggleItalic().run()}
        icon={ItalicRegular}
      />
      <BubbleMenuButton
        name="Link"
        active={editor.isActive('link')}
        command={() =>
          editor
            .chain()
            .toggleLink({ href: '' })
            .setTextSelection(editor.state.selection.to - 1)
            .run()
        }
        icon={LinkRegular}
      />
      <BubbleMenuButton
        active={editor.isActive('code')}
        name="Code"
        shortcut={createShortcutLabel('Mod', 'E')}
        command={() => editor.chain().focus().toggleCode().run()}
        icon={CodeRegular}
      />
      <BubbleMenuButton
        active={editor.isActive('strike')}
        name="Strike"
        shortcut={createShortcutLabel('Mod', 'Shift', 'X')}
        command={() => editor.chain().focus().toggleStrike().run()}
        icon={StrikethroughRegular}
      />
      <BubbleMenuButton
        active={editor.isActive('highlight')}
        name="Highlight"
        shortcut={createShortcutLabel('Mod', 'Shift', 'H')}
        command={() => editor.chain().focus().toggleHighlight().run()}
        icon={HighlighterRegular}
      />
    </BubbleMenu>
  );
};

export default NotionEditorBubbleMenu;

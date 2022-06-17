import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

import extensions from './notion-editor.extensions';
import { NotionEditorProps } from './notion-editor.types';
import NotionEditorLoading from './notion-editor-loading.component';
import NotionEditorBubbleMenu from './notion-editor-bubble-menu.component';

const NotionEditor: FC<NotionEditorProps> = ({ content, editable }) => {
  const editor = useEditor({ extensions, content, editable });

  if (!editor) {
    return <NotionEditorLoading />;
  }

  return (
    <>
      <NotionEditorBubbleMenu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default NotionEditor;

import { Meta, Story } from '@storybook/react';

import NotionEditorComponent from './notion-editor.component';
import { NotionEditorProps } from './notion-editor.types';

export default {
  component: NotionEditorComponent,
  title: 'NotionEditor',
} as Meta<NotionEditorProps>;

export const NotionEditor: Story<NotionEditorProps> = args => <NotionEditorComponent {...args} />;
NotionEditor.args = {
  content: '<p>Hello World!</p>',
};

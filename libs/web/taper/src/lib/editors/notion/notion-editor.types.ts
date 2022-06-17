import { BaseEditorProps } from '../../@types';
import { BubbleMenuProps } from '../../components';

export type NotionEditorProps = BaseEditorProps;

export type NotionEditorBubbleMenuProps = {
  editor?: BubbleMenuProps['editor'];
};

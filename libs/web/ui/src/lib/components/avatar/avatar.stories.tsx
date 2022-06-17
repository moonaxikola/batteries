import { Meta, Story } from '@storybook/react';

import Avatar from './avatar.component';
import { AvatarProps } from './avatar.types';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    color: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default'],
      },
    },
  },
} as Meta<AvatarProps>;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  color: 'default',
};

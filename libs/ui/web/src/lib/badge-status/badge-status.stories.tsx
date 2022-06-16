import { Meta, Story } from '@storybook/react';

import BadgeStatus from './badge-status.component';
import { BadgeStatusProps } from './badge-status.types';

export default {
  component: BadgeStatus,
  title: 'BadgeStatus',
  argTypes: {
    status: {
      defaultValue: 'offline',
      control: {
        type: 'select',
        options: ['away', 'busy', 'unread', 'online', 'offline', 'invisible'],
      },
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta<BadgeStatusProps>;

const Template: Story<BadgeStatusProps> = args => <BadgeStatus {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  status: 'away',
  size: 'medium',
};

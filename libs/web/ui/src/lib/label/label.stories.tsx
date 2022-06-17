import { Meta, Story } from '@storybook/react';

import Label from './label.component';
import { LabelProps } from './label.types';

export default {
  component: Label,
  title: 'Label',
  argTypes: {
    color: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'],
      },
    },
    variant: {
      defaultValue: 'filled',
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'ghost'],
      },
    },
  },
} as Meta<LabelProps>;

const Template: Story<LabelProps> = args => <Label {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  color: 'default',
  variant: 'filled',
};

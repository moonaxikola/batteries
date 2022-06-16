import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiWeb } from './ui-web';

export default {
  component: UiWeb,
  title: 'UiWeb',
} as ComponentMeta<typeof UiWeb>;

const Template: ComponentStory<typeof UiWeb> = args => <UiWeb {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

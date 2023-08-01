import type { Meta, StoryObj } from '@storybook/react';

import { Buttons } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Buttons,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {options: ['small', 'medium', 'large'], 
          control:{type:'select'}, 
          defaultValue:'medium'},
    label:{defaultValue:'Button', control:{type:'text'}},
        },
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};



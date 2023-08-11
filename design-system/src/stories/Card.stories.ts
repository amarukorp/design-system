import { Meta } from '@storybook/react';
import { Card } from '../components/Card';


const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    // Add any decorators here, if needed
  ],
  argTypes: {
    // Define your argTypes here
  },
} satisfies Meta<typeof Card>;
export default meta;


export const DefaultCard ={
    args : {
      content: 'Content Only',
    }
}
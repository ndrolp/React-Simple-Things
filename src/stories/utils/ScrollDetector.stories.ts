import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ScrollDetector from './ScrollDetector';

const meta = {
  title: 'Utils/ScrollDetector',
  component: ScrollDetector,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { callback: fn() },
} satisfies Meta<typeof ScrollDetector>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    show: true,
  },
};

export const Hidden: Story = {
  args: {
    show: false,
  },
};

export const Styled: Story = {
  args: {
    show: true,
    style: {
        backgroundColor:"red",
        height: "10px",
        width: "100px",
        margin: "auto",
        borderRadius: "1000px"
    }
  },
};
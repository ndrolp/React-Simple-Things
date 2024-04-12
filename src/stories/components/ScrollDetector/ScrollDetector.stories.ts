import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ScrollDetector from './ScrollDetector';

const meta = {
    title: 'Utils/ScrollDetector',
    component: ScrollDetector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
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
            backgroundColor: 'red',
            height: '10px',
            width: '100px',
            margin: 'auto',
            borderRadius: '1000px',
        },
    },
};

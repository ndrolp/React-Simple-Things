import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SimpleTable from './SimpleTable';
import { DynamicObject, SimpleTableField } from './SimpleTable.types';

const meta = {
    title: 'components/SimpleTable',
    component: SimpleTable,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SimpleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

interface SampleTableFields extends DynamicObject {
    address: string;
    age: number;
    first_name: string;
    last_name: string;
}

const fieldsToUse: SimpleTableField<SampleTableFields>[] = [
    { key: 'Last Name', value_field: 'last_name' },
    { key: 'First Name', value_field: 'first_name' },
    { key: 'Age + 1', value_field: 'age' },
    {
        key: 'Address',
        value_field: 'address',
        stopOnClickPropagation: true,
    },
];

const sampleSource: SampleTableFields[] = [
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
    { first_name: 'hello', last_name: 'test', age: 2, address: 'Here' },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        datasource: sampleSource,
        fields: fieldsToUse,
        onRowClick: fn(),
    },
};

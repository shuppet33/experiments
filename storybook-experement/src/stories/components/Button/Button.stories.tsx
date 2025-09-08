import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
    component: Button,
    args: {
        label: 'войти',
        size: 'medium',
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
        fullWidth: false
    },

    render: (args) => {
        return <Button {...args}>+ добавить тест</Button>
    }
};

export const fullWidth: Story = {
    args: {
        fullWidth: true,
        size: "small"
    },

    render: (args) => {
        return <Button {...args}>+ добавить тест</Button>
    }
}

export const Small: Story = {
    args: {
        size: 'small'
    },

    render: (args) => {
        return <Button {...args}>+ добавить тест</Button>
    }
}

export const Large: Story = {
    args: {
        size: 'large'
    },

    render: (args) => {
        return <Button {...args}>+ добавить тест</Button>
    }
}
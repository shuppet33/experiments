import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api'
import {Modal} from './Modal.tsx';
import {Button} from "../Button/Button.tsx";

const meta: Meta<typeof Modal> = {
    component: Modal,
    args: {
        isOpen: true,
        closeButton: true,
    },
    argTypes: {
        isOpen: {control: "boolean"},
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: false,
        closeButton: true
    },

    render: (args) => {
        const [{isOpen}, updateArgs] = useArgs<typeof args>()

        if (isOpen) {
            return (
                <Modal {...args} onClose={() => updateArgs({isOpen: false})}>
                    Контент
                </Modal>
            )
        }

        return (
            <Button size={'medium'} onClick={() => updateArgs({isOpen: true})}>открыть модалку</Button>
        )
    }
};


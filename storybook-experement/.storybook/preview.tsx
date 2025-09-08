import type {Preview} from '@storybook/react-vite'
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        font-family: sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, textarea, select {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
`;

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },
    decorators: [
        (Story) => (
            <>
                <GlobalStyle />
                <Story />
            </>
        ),
    ],
};

export default preview;
import { createGlobalStyle } from "styled-components"

import Fonts from "./fonts.css"

const StyledDoc = createGlobalStyle`
    ${Fonts}

    :root {
        --color-primary: #FFE49E;
        --color-primary-selected: #FFB800;
        --color-bg: #fff;
        --color-content: #181818;
    }

    * {
        box-sizing: border-box;
        overflow-x: hidden;

        &::selection {
            color: var(--color-content);
            background: var(--color-bg);
        }
    }

    html {
        font-size: 15px;
    }

    h1, h2 {
        margin: 0;
    }

    body {
        margin: 0;
        height: 1em;
        min-height: 100vh;
        background: #111;
        font-family: 'Bebas Neue';
        color: var(--color-light);
    }

    body section {
        height: 100%;
        padding-left: 12.5%;
        padding-right: 12.5%;
    }

	#___gatsby, #___gatsby > div, &___gatsby > div > div {
		height: 100%;
	}

    input, button {
        padding: 0;
        cursor: pointer;
        appearance: none;
        border: none;
        background: transparent;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }

    input:focus {        
        outline: none;
    }


    h1 {
        font: inherit;
        margin: 0;
    }

    ::-webkit-scrollbar {
    width: 7px;
    background: var(--color-primary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-content);
        opacity: 0.5;
    }

    @media (max-width: 1250px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 1120px) {
        html {
            font-size: 13px;
        }
    }

    @media (max-width: 1040px) {
        html {
            font-size: 12px;
        }
    }

    @media (max-width: 992px) {
        html {
            font-size: 24px;
        }

        body section {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 20px;
        }
    }
`

export default StyledDoc

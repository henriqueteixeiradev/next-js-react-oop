import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-size: 1.6rem;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html, border-style, #next{
        height: 100%;
        font-size: 62.5%;
        scroll-behavior: smooth;
    };


    input, select {
        background-color: #fff;
        width: 100%;
        padding: 10px 5px;
        margin: 9px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 8px;
    }

    button {
        width: 100%;
        background-color: #1a93d8;
        padding: 14px 20px;
        margin: 8px 0;
        border-radius: 8px;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: ${lighten(0.1, "#1a93d8")};
    }


`;

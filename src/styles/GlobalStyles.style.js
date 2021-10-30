import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-y: scroll; 
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        margin: 0;
        background-color: #ffffff;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    .w-100 {
        width: 100%;
    }
    .h-100 { 
        height: 100%;
    }
    .hauto {
        height: auto;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }

    .relative {
        position: relative;
    }
    .absolute {
        position: absolute;
    }

    /* Flexbox Classes */
    .row {
        display: flex;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .align-c {
        align-items: center;
    }
    .justify-c {
        justify-content: center;
    }
    .justify-fs {
        justify-content: flex-start;
    }
    .justify-fe {
        justify-content: flex-end;
    }
    .justify-sb {
        justify-content: space-between;
    }
    .justify-sa {
        justify-content: space-around;
    }

    // - gap-x, where x - gap size in pixels.

    .gap-5 {
        gap: 5px;
    }
    .gap-8 {
        gap: 8px;
    }
    .gap-10 {
        gap: 10px;
    }
    .gap-13 {
        gap: 13px;
    }
    .gap-15 {
        gap: 15px;
    }
    .gap-20 {
        gap: 20px;
    }
    .gap-25 {
        gap: 25px;
    }
    .gap-30 {
        gap: 30px;
    }

    /* Margin && Padding */
    .mt-10 {
        margin-top: 10px;
    }
    .mt-20 {
        margin-top: 20px;
    }

    .p-30 {
        padding: 30px;
    }

    .py-30 {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .pt-10 {
        padding-top: 10px;
    }
    .pt-20 {
        padding-top: 20px;
    }
    .pt-40 {
        padding-top: 40px;
    }
    .pt-60 {
        padding-top: 60px;
    }

    /* Text customization */

    .text-center {
        text-align: center;
    }
    .text-uppercase {
        text-transform: uppercase;
    }
    .text-nodecoration {
        text-decoration: none;
    }
    .text-bold {
        font-weight: bold;
    }
    .text-justify {
        text-align: justify;
    }

    // - c - Color
    .c-red {
        color: #F2877D;
    }
    .c-blue {
        color: #4F70B5;
    }
    .c-green {
        color: green;
    }

    // - fs - Font Size
    .fs-13 {
        font-size: 13px;
    }
    .fs-14 {
        font-size: 14px;
    }
    .fs-15 {
        font-size: 15px;
    }
    .fs-16 {
        font-size: 16px;
    }
    .fs-24 {
        font-size: 24px;
    }
    .fs-32 {
        font-size: 32px;
    }

    // - lh - Line Height
    .lh-20 {
        line-height: 2.0;
    }
    .lh-25 {
        line-height: 2.5;
    }

    :root {
        --c-red: #F2877D;
        --c-blue: #4F70B5;
        --c-white: #f1f1f1;
        --c-dark: #171717;
        --c-green: green;
        --c-grey: #CFCFCF;
    }
`;

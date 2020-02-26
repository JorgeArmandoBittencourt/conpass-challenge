import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    img{
        max-width: 100%;
    }

    #root{
        display: flex;
        justify-content: center;
    }

    .app{
        padding: 0 15px;
        max-width: 900px;
        width: 100%;
    }

    a{
        color: #b3b3b3;
        font-size: 20px;
        text-decoration: none;
    }

    button{
        background: transparent;
        cursor: pointer;
        border: 0;
    }

    .hightlight{
        position: relative;
        &:before{
            content: '';
            display: block;
            background: rgb(247, 90, 91, 0.1);
            width: calc(100% + 15px);
            height: calc(100% + 15px);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 3px solid #f75a5b;
            box-sizing: border-box;
            pointer-events: none;
        }
    }
`

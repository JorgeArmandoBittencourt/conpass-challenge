import styled from 'styled-components';

export default styled.div`
    width: 30px;
    height: 30px;
    background: #f76768;
    border-radius: 50%;
    border: 2px solid #fccdcd;
    box-shadow: 0 0 0 2px #f76768;
    position: absolute;
    transform: translate(-50%, -50%);
    top: ${ ({ y }) => `${y}px`};
    left: ${ ({ x }) => `${x}px`};
    cursor: pointer;
    z-index: ${({ visible }) => visible ? '9' : '1'};;

    .info{
        display: ${({ visible }) => visible ? 'block' : 'none'};
        width: 350px;
        height: 150px;
        background: #fff;
        border-radius: 6px;
        position: absolute;
        left: 50%;
        top: calc(100% + 28px);
        transform: translate(-50%, 0);
        box-shadow: 0px 4px 36px 4px #ccc;
        padding: 30px;
        cursor: initial;

        &:before{
            content: '';
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #fff;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translate(-50%, 0);
        }

        .title{
            margin-bottom: 20px;
            color: #494949;
            font-size: 24px;
            font-weight: 600;
            width: 100%;
        }

        .description{
            color: #777;
            word-break: break-word;
            font-size: 18px;
            width: 100%;
            resize: none
        }
    }
`

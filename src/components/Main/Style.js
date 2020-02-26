import Styled from 'styled-components';

export default Styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-button{
        background: #3ac0c7;
        border-radius: 30px;
        padding: 5px 10px;
        font-size: 20px;
        color: #fff;
        margin-bottom: 40px;

        &.disabled{
            opacity: 0.5;
            cursor: initial;

            &:hover{
                background: #3ac0c7;
            }
        }


        &:hover{
            background: #62ccd2;
        }
    }
`

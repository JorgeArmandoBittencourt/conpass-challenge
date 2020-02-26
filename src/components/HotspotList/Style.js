import styled from 'styled-components';

export default styled.div`
    width: 100%;
    max-width: 500px;

    color: #a2a2a2;

    .title{
        background: #ebebeb;
        padding: 10px 7px;
        font-size: 18px;

    }

    .hotspot-list{
        list-style-type: none;
        font-size: 20px;

        li{
            display: flex;
            justify-content: space-between;
            padding: 12px 7px;
            &:not(:last-child){
                border-bottom: 1px solid #ebebeb;
            }

            button{
                color: #70a8e9;
                text-decoration: underline;
                font-size: 16px;
            }
        }
    }
`

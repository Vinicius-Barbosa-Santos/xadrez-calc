import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: center;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
        text-align: center;
        max-width: 64px;
    }
`

export const Line = styled.div`
    height: 3px;
    width: 100%;
    margin: 16px 20px 0px;
    background-color: #48627A;

    @media(max-width: 1440px) {
        width: 80%;
    }
`
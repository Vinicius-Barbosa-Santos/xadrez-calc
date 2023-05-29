import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 37.00013732910156px;
    border: 0;
    font-weight: 600;
    color: #F2F2F2;
    border-radius: 2px;
    cursor: pointer;
    background: linear-gradient(180deg, #008BF0 0%, #0762A4 100.1%);

    &:hover {
        background: #008bf0ba;
    }

    img {
        width: 12px;
        height: 15px;
        left: 1272px;
        top: 519px;
        margin-right: 4px;
    }

    @media(max-width: 741px) {
        width: 80%;
    }

    @media(max-width: 425px) {
        width: 90%;
    }
`
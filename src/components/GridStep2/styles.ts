import styled from "styled-components";

export const GridStep2 = styled.section`
    height: 285px;
    width: 678px;
    color: #F2F2F2;
    border-radius: 2px;
    overflow: auto;
    background: #232D4D;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, .2);
    }

    h3 {
        font-weight: 700;
        font-size: 14px;
        padding: 15px;
    }
    
    @media(max-width: 1440px) {
        width: 80%;
    }
`

export const ItemsSelectedGrid = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
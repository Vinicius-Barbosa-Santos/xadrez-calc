import styled from "styled-components";

export const GridStep1 = styled.section`
    height: auto;
    width: 677px;
    color: #F2F2F2;
    border-radius: 2px;
    background: #232D4D;

    h3 {
        font-weight: 700;
        font-size: 14px;
        padding: 15px 15px 0 15px;
    }

    @media(max-width: 1450px) {
        width: 80%;
    }
`

export const FlexGrid = styled.div`
    display: flex;
    justify-content: center;
`

export const GridItemsMap = styled.div`
    display: grid;
    gap: 22px;
    padding: 15px;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 616px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
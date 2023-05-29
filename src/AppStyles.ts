import styled from "styled-components";

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1376px;
`

export const Main = styled.main`
    display: flex;
    gap: 21px;
    margin-top: 2.188rem;

    @media(max-width: 1440px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1440px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`
import styled from "styled-components";

export const GridStep3 = styled.section`
    height: 149px;
    width: 678px;
    color: #F2F2F2;
    margin-top: 21px;
    border-radius: 2px;
    background: #232D4D;

    h3 {
        font-weight: 700;
        font-size: 14px;
    }

    h3, p {
        padding: 15px;
    }

    @media(max-width: 1440px) {
        width: 80%;
    }

    @media(max-width: 741px) {
        height: auto;
    }
`

export const Flex = styled.div`
    display: flex;

    @media(max-width: 741px) {
        flex-direction: column;
    }
`

export const FlexLeftSide = styled.div`
    flex: 2;

    p {
        font-weight: 700;
        font-size: 12px;
    }

    @media(max-width: 741px) {
        display: flex;
        flex-direction: column;
    }
`

export const Quantity = styled.div`
    display: flex;
    margin-right: 15px;
    align-items: center;

    @media(max-width: 741px) {
        justify-content: space-between;
    }
`

export const QuantityBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 60px;
    border-radius: 2px;
    background: #0F253A;

    p {
        font-size: 12px;
    }
`

export const Total = styled.div`
    display: flex;

    @media(max-width: 741px) {
        justify-content: space-between;
        margin-bottom: 22px;
    }
`

export const TotalBox = styled.div`
    display: flex;
    height: 48px;
    width: 158px;
    left: 1235px;
    font-family: 'Open Sans';
    align-items: center;
    justify-content: center;
    top: 426px;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    margin-right: 15px;
    border-radius: 2px;
    background: #0F253A;
`

export const ButtonFlex = styled.div`
    width: 100%;
    padding: 40px 15px 0px 45px;
    margin-bottom: 15px;

    @media(max-width: 741px) {
        display: flex;
        padding: 0;
        justify-content: center;
    }
`

export const FlexRightSide = styled.div`
    flex: 1;

    p {
        font-family: 'Open Sans';
        font-weight: 700;
        font-size: 13px;
    }
`
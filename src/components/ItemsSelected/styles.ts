import styled from "styled-components";

export const ItemsSelected = styled.div`
    display: flex;
    height: 71px;
    width: 648px;
    left: 745px;
    top: 161px;
    border-radius: 2px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    background-color: #454d6c;

    @media(max-width: 900px) {
        width: 90%;
        height: auto;
        flex-direction : column;
    }
`

export const LeftSide = styled.div`
    flex: 1;
    display: flex;

    @media(max-width: 660px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

export const ImageSelected = styled.div`
    display: flex;
    height: 100%;
    padding: 15px 24px;
    align-items: center;
`

export const Image = styled.img`
    height: 42px;
    width: 25px;
`

export const ItemsSelectedText = styled.div`
    display: flex;
    width: 100%;
    margin-left: 68px;
    margin-right: 15px;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 660px) {
        margin-left: 25px;
    }
`

export const ItemSelectedName = styled.div`
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-align: left;
`

export const ItemSelectedDesc = styled.div`
    font-family: Open Sans;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
`

export const RightSide = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 900px) {
        margin: 12px 0px;
        justify-content: space-between;
    }
`

export const Quantity = styled.div`
    display: flex;
    height: 30px;
    width: 98px;
    left: 1227px;
    top: 181px;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 25px;
    background-color: #293952;

    span {
        font-family: Open Sans;
        font-size: 13px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0.15000000596046448px;
        text-align: center;
    }

    @media(max-width: 900px) {
        margin-left: 15px;
    }
`

export const Trash = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 32px;
    border-radius: 2px;
    margin-right: 11px;
    cursor: pointer;
    border: 0;
    background: linear-gradient(180deg, #75747E 0%, #4B495A 100%);

    &:hover {
        background: #75747ea8;
    }

    @media(max-width: 660px) {
        margin-right: 15px;
    }
`

export const TrashImage = styled.img`
    height: 10.952381134033203px;
    width: 9px;
    left: 1370px;
    top: 189.24142456054688px;
    border-radius: 0px;
`
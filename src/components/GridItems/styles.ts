import styled from "styled-components";

export const GridItems = styled.div`
    height: 216px;
    width: 201px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #454d6c;

    &:hover {
        background-color: #45476c;
    }

    @media(max-width: 358px) {
        width: 100%;
        height: auto;
    }
`

export const NameIcon = styled.p`
    padding: 9px 12px 1px;
`

export const ItemDesc = styled.div`
    font-size: 10px;
    font-family: 'Open Sans';
    padding: 0px 10px 15px 12px;
`

export const Icon = styled.div`
    display: flex;
    height: 110px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: flex-end;
`

export const ImageIcon = styled.img`
    height: auto;
    width: auto;
    border-radius: 0px;
`

export const Points = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0px;
    margin-top: 3px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 800;
    line-height: 25px;
    letter-spacing: 0.15000000596046448px;
    text-align: center;
`
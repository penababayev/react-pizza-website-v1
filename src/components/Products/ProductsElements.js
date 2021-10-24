import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 100vw;
    min-width: 100vw;
    padding: 5rem calc((100vw - 1300px)/2);
    background: #150f0f;
    color: #fff;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-height: 100%;
`
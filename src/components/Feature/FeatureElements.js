import styled from 'styled-components';
import FeaturePic from '../../images/featured3.jpg';


export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-height: 500px;
    padding: 0 1rem;
    color: #fff;
    text-align: center;
    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }
    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`

export const FeatureButton = styled.button`
    padding: 0.6rem 3rem;
    color: #000;
    background: #ffc500;
    font-size: 1.4rem;
    transition: 0.2s ease-out;
    border: none;

    &:hover{
        background: #e31837;
        cursor: pointer;
        color: #fff;
        transition: 0.2s ease-out;
    }
`
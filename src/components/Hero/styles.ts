import styled from 'styled-components';

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background: linear-gradient(90deg, #000, #222);
    color: white;
    text-align: center;
`;

export const HeroTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

export const HeroText = styled.p`
    font-size: 1.2rem;
    margin-top: 10px;
    max-width: 600px;
`;

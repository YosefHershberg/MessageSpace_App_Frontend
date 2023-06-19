import styled from "styled-components";

export const WelcomePageStyled = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        height: 30vmax;
        /* width: 50vmax; */
        aspect-ratio: 1 / 1;
        min-height: 20rem;
    }

    .welcome-header {
        margin: .5rem 0 .2rem;
        font-weight: 500;
    }

    .welcome-paragraph {
        margin: .3rem 1rem 2rem;
        opacity: 0.8;
    }
`
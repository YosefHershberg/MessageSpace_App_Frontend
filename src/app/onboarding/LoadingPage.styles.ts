import { Box } from "@mui/material"
import styled from "styled-components"

export const LoadingPageStyled = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-container {
        /* min-height: 14rem; */
        min-width: 20rem;
        width: 40vmax;
        min-height: 15rem;
        max-height: 20rem;
        height: 40vmax;
        margin: 1rem;
        /* width: 70vmax; */
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .loading-header {
            margin: 0;
            font-weight: 400;
        }

        .loading-image {
            min-height: 10rem;
            height: 20vmax;
            max-height: 15rem;
        }
    }
`

export const LinearProgressContainer = styled(Box)`
    width: 100%;
    margin: 0 2rem;
    min-width: 10rem;
`
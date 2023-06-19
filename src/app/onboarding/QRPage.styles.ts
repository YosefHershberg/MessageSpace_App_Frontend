import styled from "styled-components";

export const QRPageStyles = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-container {
        margin: 1rem;
        display: flex;
        max-width: 60rem;
        min-width: 40rem;
        width: 70vmax;
        min-height: 14rem;
        /* max-height: 17rem; */
        height: 16vmax;
        /* border: 1px solid black; */
        justify-content: space-between;
        
        .instructions {
            /* margin: 1rem 0; */
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            /* padding: 0.5rem; */

            .instructions-header {
                margin: 0;
                font-weight: 400;
            }

            .instructions-list {
                color: gray;
                /* height: ; */
                margin: 0 1rem 0 0;
                /* max-width: 30rem; */
                padding: 0;
                list-style-type: decimal;

                div {
                    font-size: .8em;
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .qr-container {
            /* height: 100%; */
            aspect-ratio: 1;
            border: gray 2px solid;
            border-radius: 6px;
            margin: .7rem;
            display: flex;
            justify-content: center;
        }
    }
`

export const qr_styles = {
    height: "auto",
    maxWidth: "90%",
    width: "90%"
}

export const SettingsIconStyled = styled.img`
    width: 1.5rem;
    margin: 0 .7rem;
`
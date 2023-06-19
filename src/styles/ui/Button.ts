import styled from "styled-components";
import { Link } from 'react-router-dom'
// @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

export const Button = styled(Link)`
    height: 45px;
    width: 186px;
    border-radius: 100px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.5s ease;
    font-family: "century-gothic", sans-serif;
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;
    text-decoration: none;

    &:hover {
        background-color: #0B3059;
        color: white;
        border: none;
    }
`
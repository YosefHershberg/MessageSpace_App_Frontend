import React from 'react'
import errorImg from '../../../assets/error.png'
import styled from 'styled-components'

const ErrorImage = styled.img`
    height: 90%;
    aspect-ratio: 1/1;
`

function ErrorGhost() {
    return (
        <div className='center'>
            <ErrorImage src={errorImg} alt="" />
        </div>
    )
}

export default ErrorGhost
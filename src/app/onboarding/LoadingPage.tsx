import { LinearProgressContainer, LoadingPageStyled } from './LoadingPage.styles'
import LinearProgress from '@mui/material/LinearProgress';
import loadingImage from '../../assets/loadingImageSVG.svg'

const LoadingPage = () => {
  return (
    <LoadingPageStyled>
      <div className="loading-container">
        <img
          className='loading-image'
          src={loadingImage}
          alt="Loading pic..."
        />
        <LinearProgressContainer>
          <LinearProgress color="inherit" style={{color: 'rgb(11, 48, 89)'}}/>
        </LinearProgressContainer>
        <h3 className='loading-header'>Connecting to your account...</h3>
      </div>
    </LoadingPageStyled>
  )
}

export default LoadingPage
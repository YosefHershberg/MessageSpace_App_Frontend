import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

export const LoadingSpinnerStyled = styled(CircularProgress)`
  color: #4b4b4b;
`

function LoadingSpinner() {
  return (
    <div className="center">
      <LoadingSpinnerStyled />
    </div>
  )
}

export default LoadingSpinner
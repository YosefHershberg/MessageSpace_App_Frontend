import { WelcomePageStyled } from './WelcomePage.styles'
import welcomeImg from '../../assets/welcomeImgPNG.svg'
import { Button } from '../../styles/ui/Button'

function WelcomePage() {
    return (
        <WelcomePageStyled>
            <img src={welcomeImg} alt="" />
            <h3 className='welcome-header'>Welcome to MessageSpace</h3>
            <p className='welcome-paragraph'>
                Enhancing connections, feedback and originzational processes via WhatsApp Software
            </p>
            <Button to="/login">
                Get started
            </Button>
        </WelcomePageStyled>
    )
}

export default WelcomePage
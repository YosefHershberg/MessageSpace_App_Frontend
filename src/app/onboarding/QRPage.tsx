import LoadingSpinner from '../../styles/ui/components/LoadingSpinner'
import QRCode from '../../components/QRCode';
import { QRPageStyles, SettingsIconStyled } from './QRPage.styles'
import SettingsIcon from '../../assets/setting_icon.png';

function QRPage({ qrCode }: { qrCode: string | null }) {
    return (
        <QRPageStyles>
            <div className="login-container">
                <div className='instructions'>
                    <h4 className='instructions-header'>
                        To Connect WhatsApp to MessageSpace on you device
                    </h4>
                    <div className="instructions-list">
                        <div>1. Open WhatsApp on your phone.</div>
                        <div>2. Tap settings
                            <SettingsIconStyled src={SettingsIcon} alt="" />
                            and select Link Devices.</div>
                        <div>3. Tap "Link a device" and point your phone camra to this screen to capture the QR code.</div>
                    </div>
                </div>
                <div className="qr-container">
                    {!qrCode ?
                        <LoadingSpinner /> :
                        <QRCode qrCode={qrCode} />
                    }
                </div>
            </div>
        </QRPageStyles>
    )
}

export default QRPage
import { qr_styles } from '../app/onboarding/QRPage.styles'
import { default as QR }  from 'react-qr-code'
import useSWR from 'swr'
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL

function QRCode({ qrCode }: { qrCode: string }) {

    return (
        <QR
            style={qr_styles}
            value={qrCode}
        />
    )
}

export default QRCode
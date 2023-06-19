import { useEffect, useState } from 'react';
import QRPage from './QRPage';
import LoadingPage from './LoadingPage';
import Cookies from 'universal-cookie'
const SERVER_URL = import.meta.env.VITE_SERVER_URL

const cookies = new Cookies()

function Login() {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [status, setStatus] = useState<'init' | 'qr' | 'scanned' | 'connected'>('init')

  const saveSessionIdToCookie = (sessionId: string) => {
    cookies.set('session_id', sessionId)
  }

  useEffect(() => {
    const eventSource = new EventSource(`${SERVER_URL}/login`)

    eventSource.onmessage = function (event) {
      const parsedData = JSON.parse(event.data)
      console.log(parsedData)
      if (parsedData.message === 'qr') {
        setStatus('qr')
        setQrCode(parsedData.qrCode)
      }
      if (parsedData.message === 'scanned') setStatus('scanned')
      if (parsedData.message === 'ready') saveSessionIdToCookie(parsedData.sessionId)
    }

    eventSource.onerror = () => {
      eventSource.close();
    }

    return () => {
      eventSource.close();
    };
  }, [])

  if (status === 'scanned') return (<LoadingPage />)
  if (status === 'init' || 'qr') return (<QRPage qrCode={qrCode} />)
}

export default Login
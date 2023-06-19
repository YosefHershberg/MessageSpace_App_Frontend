import { useEffect } from "react";
import Login from "./app/onboarding/Login"
import WelcomePage from "./app/onboarding/WelcomePage"
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/welcomepage')
  }, []);

  return (
    <>
      <Routes>
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

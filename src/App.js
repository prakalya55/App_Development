import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import App from "./pages/app"
import { Route, Routes } from "react-router-dom"

function Appp() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<App />} />
        </Routes>
      </div>
    </>
  )
}

export default Appp

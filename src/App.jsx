import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App

import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ProductId from './components/pages/ProductId'
import Purchases from './components/pages/Purchases'
import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import ProtectedRoutes from './components/ProtectorRouter'

function App() {
  const isLoading = useSelector(state=>state.isloading)

  return (
    <HashRouter>
      <NavBar/>
      {isLoading && <LoadingScreen/>}
      <Container className='my-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
       
        <Route path='/Product/:id' element={<ProductId/>}/>
      </Routes>
      <Routes element= {<ProtectedRoutes/>}>
      <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
      </Container>
    </HashRouter>
  )
}

export default App

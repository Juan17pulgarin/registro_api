import { Route, Routes } from 'react-router-dom'
import FormularioRegistro from './components/FormularioRegistro'
import NavbarDashboard from './components/NavbarDashboard'

function App() {
  return (
    <Routes>
     <Route path='/' element={ <FormularioRegistro />}/>
     <Route path='/dashboard' element={<NavbarDashboard />}/>
    </Routes>
  )
}

export default App

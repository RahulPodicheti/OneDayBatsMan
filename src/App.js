import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Eee from './pages/Eee'
import Navbar from './components/Navbar'
import Ai from './cse6subs/Ai'
import Flat from './cse6subs/Flat'
import Fsd from './cse6subs/Fsd'
import Iot from './cse6subs/Iot'
import Ml from './cse6subs/Ml'
import PrintCse6Subs from './cse6subs/PrintCse6Subs'
import Chemical from './pages/Chemical'
import Civil from './pages/Civil'
import Csd from './pages/Csd'
import Cse from './pages/Cse'
import Csm from './pages/Csm'
import Ece from './pages/Ece'
import HomePage from './pages/HomePage'
import Mechanical from './pages/Mechanical'
import TypesOfMachineLearning from './cse6subs/TypesOfMachineLearning'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/cse' element={<Cse/>} />
              <Route path='/csd' element={<Csd/>} />
              <Route path='/csm' element={<Csm/>} />
              <Route path='/civil' element={<Civil/>} />
              <Route path='/chemical' element={<Chemical/>} />
              <Route path='/mechanical' element={<Mechanical/>} />
              <Route path='/ece' element={<Ece/>} />
              <Route path='/eee' element={<Eee/>} />  
              <Route path='/printcse6su' element={<PrintCse6Subs/>} /> 
              <Route path='/ai' element={<Ai/>} />            
              <Route path='/ml' element={<Ml/>} />            
              <Route path='/flat' element={<Flat/>} />            
              <Route path='/fsd' element={<Fsd/>} />            
              <Route path='/iot' element={<Iot/>} />        
              <Route path='/typesofmachinelearning' element={<TypesOfMachineLearning/>} />
              
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

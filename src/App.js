import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Eee from './pages/Eee'
import Navbar from './components/Navbar'
import Ai from './cseSems/cse6subs/ai/Ai'
import Flat from './cseSems/cse6subs/flat/Flat'
import Fsd from './cseSems/cse6subs/fsd/Fsd'
import Iot from './cseSems/cse6subs/iot/Iot'
import Ml from './cseSems/cse6subs/ml/Ml'
import PrintCse6Subs from './cseSems/cse6subs/PrintCse6Subs'
import Chemical from './pages/Chemical'
import Civil from './pages/Civil'
import Csd from './pages/Csd'
import Cse from './pages/Cse'
import Csm from './pages/Csm'
import Ece from './pages/Ece'
import HomePage from './pages/HomePage'
import Mechanical from './pages/Mechanical'
import TypesOfMachineLearning from './cseSems/cse6subs/ml/mlUnits/TypesOfMachineLearning'
import ReinforcementLearning from './cseSems/cse6subs/ml/mlUnits/ReinforcementLearning'
import MultiLayerPerception from './cseSems/cse6subs/ml/mlUnits/MultiLayerPerception'
import DimensionalityReduction from './cseSems/cse6subs/ml/mlUnits/DimensionalityReduction'
import LearningWithTrees from './cseSems/cse6subs/ml/mlUnits/LearningWithTrees'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route exact path='/cse' element={<Cse/>} />
              <Route exact path='/csd' element={<Csd/>} />
              <Route exact path='/csm' element={<Csm/>} />
              <Route exact path='/civil' element={<Civil/>} />
              <Route exact path='/chemical' element={<Chemical/>} />
              <Route exact path='/mechanical' element={<Mechanical/>} />
              <Route exact path='/ece' element={<Ece/>} />
              <Route exact path='/eee' element={<Eee/>} />  
              <Route exact path='/printcse6su' element={<PrintCse6Subs/>} /> 
              <Route exact path='/ai' element={<Ai/>} />            
              <Route exact path='/ml' element={<Ml/>} />            
              <Route exact path='/flat' element={<Flat/>} />            
              <Route exact path='/fsd' element={<Fsd/>} />            
              <Route exact path='/iot' element={<Iot/>} />        
              <Route exact path='/typesofmachinelearning' element={<TypesOfMachineLearning/>} />
              <Route exact path='/reinforcementlearning' element={<ReinforcementLearning/>} />
              <Route exact path='/multilayerperception' element={<MultiLayerPerception/>} />
              <Route exact path='/dimensionallyreduction' element={<DimensionalityReduction/>} />
              <Route exact path='/learningwithtrees' element={<LearningWithTrees/>} />
              
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

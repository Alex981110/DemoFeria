import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkillsCss from './components/css/SkillsCss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SkillsCss /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
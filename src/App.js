import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drinkdetail from './components/Drinkdetail';
import Productpage from './components/Productpage';

function App() {
  return (

    
    <Router>
      <div>

      
        <div className="container">
          <Routes>
            <Route path="/" element={<Drinkdetail />} />
            <Route path="/product/:id" element={<Productpage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

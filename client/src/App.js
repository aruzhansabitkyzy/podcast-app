import './App.css';
import {Navbar} from '../src/components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {SearchForm } from './components/Search/SearchForm'
import { Main } from './components/Main';
import axios from 'axios';
function App() {

  

  return (
    <div className="page">
        <Router>
          <Navbar />
          {/* <Routes>
            <Route path='/'></Route>
            <Route path='/around-you'></Route>
            <Route path='/top-artists'></Route>
            <Route path='/top-charts'></Route>
          </Routes> */}
          <Main/>
        </Router>
    </div>
  );
} 

export default App;

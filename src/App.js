import { ArcElement, CategoryScale, Chart, LineElement, LinearScale, PointElement } from 'chart.js';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SignUp from './Login/SignUp';
import { Route, Routes } from 'react-router';
import Create from './CreateAccount/Create';

Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement);

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;

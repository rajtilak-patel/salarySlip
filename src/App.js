
import './App.css';
import SalaryForm from './Pages/SalaryForm';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<SalaryForm/>} />
        <Route  path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
         {/* <SalaryForm/> */}
     
    </div>
  );
}

export default App;

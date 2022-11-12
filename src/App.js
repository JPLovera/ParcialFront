import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './layouts/Inicio';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route index element={<Inicio/>}/>
       
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import {Routes,Route} from "react-router-dom"
import Reviews from './Components/Reviews/Reviews';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/home' element={<Shop></Shop>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>


      </Routes>
    </div>
  );
}

export default App;

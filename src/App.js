import './App.css';
import Header from './Components/Header/Header';
import {Routes,Route} from "react-router-dom"
import Reviews from './Components/Reviews/Reviews';
import Shop from './Components/Shop/Shop';
import PageNotFound from './Components/404Page/PageNotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/home' element={<Shop></Shop>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import ProductForm from './page/CreateProduct';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import ProductTable from './component/ProductTable';
import MyEditor from './component/MyEditor';
import NotFound from './page/NotFound';
import Navbar from './page/Navbar';
import Footer from './component/Footer';
import Login from './page/Login';
import Movie from './component/Movie';
import About from './component/About';
import Profile from './page/Profile';






function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Dashboard />}>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/create' element={<ProductForm update={false}/>} />
      <Route path='/update' element={<ProductForm update={true}/>} />
      <Route path='/datatable' element={<ProductTable />} />
      <Route path='/editor' element={<MyEditor />} />
      <Route path='/movie' element={<Movie />}/>
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<NotFound />} />
    
  </Routes>

  
  </>
    
  );
}

export default App;
function Dashboard(){
  return(
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

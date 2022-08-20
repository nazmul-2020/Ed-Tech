import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';

import {Routes,Route} from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<PrivateRoute>
          <Home></Home>
        </PrivateRoute>}>Home</Route>
      <Route path='/home' element={
        <PrivateRoute>
          <Home></Home>
        </PrivateRoute>
      }>Home</Route>

      <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

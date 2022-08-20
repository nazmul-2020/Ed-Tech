import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';

import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/home' element={<Home></Home>}>Home</Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.js'
import AppContext from "./context/context.js";
import Header from './components/Header/Header.js'
import AllCategory from './components/Category/AllCategory.js'
import Footer from './components/Home/Footer.js'
import ProductDetail from './components/ProductDetail/ProductDetail.js';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/checkout/Checkout.js'
import SelectCategory from './components/SelectCat/SelectCategory.js';
import Contact from './components/contact/Contact.js'
import About from './components/about/About.js'
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';
import ForgetPass from './components/login/ForgetPass.js';
import Footer_Bottom from './components/Home/Last.js';

function App() {
  return (
      <BrowserRouter>
        <AppContext>
          <Header/>
          <Routes>
            <Route path='/' element={<><Home/></>} />
            <Route path='/category' element={<><AllCategory/></>}/>
            <Route path='/category/:categId' element={<><SelectCategory/></>}/>
            <Route path='/product/:prodId' element={<><ProductDetail/></>}/>
            <Route path='/cart' element={<><Cart /></>} />
            <Route path='/checkout' element={<><Checkout /></>} />
            <Route path='/contact' element={<><Contact/></>} />
            <Route path='/contact:contactId' element={<cc/>}/>
            <Route path='/about' element={<><About/></>} />
            <Route path='/login' element={<><Login/></>} />
            <Route path='/signup' element={<><SignUp/></>} />
            <Route path='/reset password' element={<><ForgetPass/></>} />
          </Routes>
          <Footer/>
          <Footer_Bottom/>
        </AppContext>
      </BrowserRouter>
  );
}
export default App;

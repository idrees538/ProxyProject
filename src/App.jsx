import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import "./app.css"
import Dashboard from "./Pages/Dashboard";
import OrderPage from "./Pages/OrderPage";
import Generator from "./Pages/Generator";
import Wallet from "./Pages/Wallet";
import Support from "./Pages/Support";
import AdminDashboard from "./AdminPages/Dashboard";
import AdminOrder from "./AdminPages/AdminOrder";
import AdminOrderNext from "./AdminPages/AdminOrderNext";
import AdminUser from "./AdminPages/AdminUser";
import AdminProduct from "./AdminPages/AdminProduct";
import AdminProductNext from "./AdminPages/AdminProductNext";
import LandingPage from "./Pages/LAndingPage";
import Settings from "./AdminPages/Settings";
import FAQ from "./Pages/FAQ";
import TOS from "./Pages/TOS";
import Privacypolicy from "./Pages/Privacypolicy";
import Signup from "./Pages/Signup";
import UserFaq from "./Pages/UserFaq";

// import EmptyFile from "./Pages/EmptyFile";


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>

    {/* LAnding Page */}
   {/* <Route path="/landpage" element={<LandingPage/>}/> */}

{/*  */}
   <Route path="/faq" element={<FAQ/>}/>
    {/* <Route path="/tos" element={<TOS/>}/>
    <Route path="/privacypolicy" element={<Privacypolicy/>}/> */}
   
  
    
    {/* user */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/Order" element={<OrderPage/>}/>
    <Route path="/generator" element={<Generator/>}/>
    <Route path="/wallet" element={<Wallet/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/userfaq" element={<UserFaq/>}/>
    
    {/* Admin */}
    <Route path="/h" element={<AdminDashboard/>}/>
    <Route path="/adminorder" element={<AdminOrder/>}/>
    <Route path="/ordernext" element={<AdminOrderNext/>}/>
    <Route path="/adminusers" element={<AdminUser/>}/>
    <Route path="/adminproduct" element={<AdminProduct/>}/>
    <Route path="/newproduct" element={<AdminProductNext/>}/>
    <Route path="/setting" element={<Settings/>}/>
 
    
    

   

 
  
    
   
    {/* <Route path="/empty" element={<EmptyFile/>}/> */}
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App

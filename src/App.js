import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"


const App=()=>{
  return(
    <><BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Home" element={<Home/>} />
          <Route path="register" element={<Register />} />
          <Route path="layout" element={<Layout />} />
        </Route>
      
      </Routes></BrowserRouter></>
    
  )
}
export default App;
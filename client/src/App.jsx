
// import Footer from "./component/Footer";
// import Navbar from "./component/Navbar";
import Home from './component/Home';
import  Contact  from "./component/contact";
import About from "./component/About";
import Error from "./component/NotFound";
import {BrowserRouter, Route , Routes} from "react-router-dom";


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
     
     
    </>
  )
}

export default App;


import Home from './component/Home';
import  Contact  from "./component/contact";
import About from "./component/About";
import Error from "./component/NotFound";
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Signup from './component/Signup';
import LogIn from './component/Login';



function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
     
     
    </>
  )
}

export default App;

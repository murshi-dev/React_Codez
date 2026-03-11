import { BrowserRouter,Link, Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
function App()
{
  return(
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>|
          <Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|
          <Link to="/team">Team</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/>
         </Routes>
    </BrowserRouter>
  );
}
export default App;
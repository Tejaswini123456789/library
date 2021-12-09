
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './Home';



function App() {
  return (
<>
    <h1>Library app</h1>
    <Router>
      <nav >
        <h1>Library App</h1>
        <div>
            <Link to="/">Home</Link>
        </div>
    </nav>

    <Routes>
        <Route path="/" element={<Home />} /> 
         
      </Routes>
    </Router>
   </>
  );
}

export default App;

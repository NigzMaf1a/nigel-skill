import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Container className="d-flex justify-content-center">
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;

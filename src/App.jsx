import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Techy-Star/" element={<Home />} />
        <Route path="/Techy-Star/contact" element={<Contact />} />
        <Route path="/Techy-Star/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

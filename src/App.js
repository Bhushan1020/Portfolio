import Intro from "./components/introduction"
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import About from "./components/about"
import WorkProcess from "./components/workProcess";
import Services from "./components/profession"
function App() {
  return (
    <div>    
      <NavBar />
      <div className="introduction-profile-background">
         <Intro />
      </div>
      <div className="introduction-profile-background">
         <About />
      </div>
      <WorkProcess />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

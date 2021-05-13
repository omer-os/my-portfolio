import './app.css'

import About from "./javascript/about";
import Contacts from "./javascript/contacts";
import Home from "./javascript/home";
import Nav from "./javascript/navbar";
import Projects from "./javascript/projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

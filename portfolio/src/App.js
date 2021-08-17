import "./App.css";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./components/Skills/Skills";
import "./components/FontAwesome/FontAwesome"

function App() {
  return (
    <Router>
      <AnimatePresence initial={true} exitBeforeEnter>
      <Switch>
      <Route path ='/' component={Home}/> 
      </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;

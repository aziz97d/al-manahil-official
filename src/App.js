import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Progress from "./components/Progress/Progress.js";
import OurProjects from "./components/OurProjects/OurProjects.js";
import Admin from "./components/Admin/Admin/Admin.js";
import AppealDetails from "./components/Home/AppealDetails/AppealDetails.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/progress" component={Progress}/>
        <Route path="/projects" component={OurProjects}/>
        <Route path="/appealDetails" component={AppealDetails}/>
        <Route path="/admin" component={Admin} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

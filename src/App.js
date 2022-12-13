// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Progress from "./components/Progress/Progress.js";
import OurProjects from "./components/OurProjects/OurProjects.js";
import Admin from "./components/Admin/Admin/Admin.js";
import AppealDetails from "./components/Home/AppealDetails/AppealDetails.js";
import Donate from "./components/Donate/Donate.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Authentication from "./components/Authentication/Authentication.js";
import Ramadan from "./components/Ramadan/Ramadan";
import Qurbani from "./components/Qurbani/Qurbani";
import Pay from "./components/Pay/Pay";
import SuccessStory from "./components/SuccessStory/SuccessStory";
import Login from "./components/Authentication/Login/Login";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    // <Router>
    //   <ScrollToTop>
    //     <Switch>
    //       {/* <Route path="/about"></Route>
    //       <Route path="/users"></Route> */}
    //       <Route path="/progress" component={Progress} />
    //       <Route path="/successStory" component={SuccessStory} />
    //       <Route path="/projects" component={OurProjects} />
    //       <Route path="/appealDetails/:appealId" component={AppealDetails} />
    //       <Route path="/donate" component={Donate} />
    //       <Route path="/ramadan" component={Ramadan} />
    //       <Route path="/qurbani" component={Qurbani} />
    //       <Route path="/admin" component={Admin} />
    //       <Route path="/authentication" component={Authentication} />

    //       <Route path="/payment" component={Pay} />
    //       <Route path="/login" component={Login} />

    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </ScrollToTop>
    // </Router>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />


          <Route path="successStory" element={< SuccessStory />} />
          <Route path="projects" element={<OurProjects />} />
          <Route path="appealDetails/:appealId" element={< AppealDetails />} />
          <Route path="donate" element={< Donate />} />
          <Route path="ramadan" element={< Ramadan />} />
          <Route path="qurbani" element={<Qurbani />} />
          <Route path="admin" element={< Admin/>} />
          <Route path="authentication" element={<Authentication />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

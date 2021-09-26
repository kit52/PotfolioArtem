import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { TypedReactHooksDemo } from "./Components/Typed/TypedReactHooksDemo";
import Works from './Components/Works/Works';
import Banner from './Components/Banners/Banner';
import LostShirt from "./Components/LostShirt/LostShirt";
import Anion from "./Components/Anion/Anion";
import Klinkman from "./Components/Klinkman/Klinkman";
import SoftManagment from "./Components/SoftManagment/SoftManagment"
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <TypedReactHooksDemo />} />
        <Route exact path="/Works" render={() => <Works />} />
        <Route exact path="/Banner" render={() => <Banner />} />
        <Route exact path="/LostShirt" render={() => <LostShirt />} />
        <Route exact path="/Anion" render={() => <Anion />} />
        <Route exact path="/Klinkman" render={() => <Klinkman />} />
        <Route exact path="/SoftManagment" render={() => <SoftManagment />} />
      </Switch>
    </HashRouter>

  );
}

export default App;

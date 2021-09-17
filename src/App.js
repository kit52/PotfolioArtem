import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { TypedReactHooksDemo } from "./Components/Typed/TypedReactHooksDemo";
import Works from './Components/Works/Works';
function App() {
  return (<HashRouter>
    <Switch>
      <Route exact path="/" render={() => <TypedReactHooksDemo />} />
      <Route exact path="/Works" render={() => <Works />} />
    </Switch>
  </HashRouter>

  );
}

export default App;

import './App.css';
import {BankSelector} from "./pages/BankSelector/BankSelector";
import {AppContainer} from "./App.style";
import PayComp from "./components/Pay/PayComp";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import {Home} from "./pages/home/home";


function App() {
  return (
    <AppContainer>
        <Router>
            <Switch>
                <Route path="/pay">
                    <PayComp />
                </Route>
                <Route path="/banks">
                    <BankSelector />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </AppContainer>

  );
}

export default App;

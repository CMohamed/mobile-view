import './App.css';
import {BankSelector} from "./pages/BankSelector/BankSelector";
import {AppContainer} from "./App.style";
import PayComp from "./components/Pay/PayComp";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import {Home} from "./pages/home/home";
import {NavComp} from "./nav/NavComp";
import {PaymentCodeComp} from "./pages/paymentCode/PaymentCode";
import {ScanQRCodeComp} from "./pages/scanQrCode/ScanQRCodeComp";
import styled from "styled-components";

export const pages = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Payment',
        path: '/pay',
    },
    {
        label: 'Banks',
        path: '/banks',
    },
    {
        label: 'Make pay',
        path: '/make-payment',
    },
    {
        label: 'Scan',
        path: '/scan-qr-code',
    },
]

const RouterOutlet = styled.div`
    bottom: 50px;
`;

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
                <Route path="/make-payment">
                    <PaymentCodeComp paymentCode="*737*000*2345#" />
                </Route>
                <Route path="/scan-qr-code">
                    <ScanQRCodeComp />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <NavComp />
        </Router>
    </AppContainer>

  );
}

export default App;

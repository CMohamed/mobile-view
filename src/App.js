import './App.css';
import {BankSelector} from "./pages/BankSelector/BankSelector";
import {AppContainer} from "./App.style";
import PayComp from "./components/Pay/PayComp";

function App() {
  return (
    <AppContainer>
        <PayComp />
    </AppContainer>

  );
}

export default App;

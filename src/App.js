import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";

const App = () => {
  console.warn = console.error = () => null;
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;

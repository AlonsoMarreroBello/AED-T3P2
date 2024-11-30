import { BrowserRouter } from "react-router-dom";

import "./App.css";
import RouterApp from "./components/routerApp/RouterApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}

export default App;

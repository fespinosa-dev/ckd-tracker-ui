import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddFood from "./components/AddFood";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/addFood">
            <AddFood />
          </Route>
          <Route path="/">
            <Header />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

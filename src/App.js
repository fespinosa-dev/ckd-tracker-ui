import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddFood from "./components/AddFood";
import SearchFood from "./components/SearchFood";
import DaySelect from "./components/DaySelect";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/search">
            <SearchFood />
          </Route>
          <Route path="/addFood">
            <AddFood />
          </Route>
          <Route path="/">
            <Header>
              <DaySelect />
            </Header>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

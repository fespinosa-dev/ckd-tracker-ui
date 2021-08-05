import logo from "./logo.svg";

import "./App.css";
import DaySelect from "./components/DaySelect";

function App() {
  return (
    <div>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start"></div>
        <div className="navbar-center ">
          <DaySelect />
        </div>
        <div className="navbar-end"></div>
      </div>

      {/* <!-- Span bottom edge --> */}
      <div>
        <div className="absolute inset-x-0 bottom-0 h-16 ...">
          <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content "></div>
        </div>
      </div>
    </div>
  );
}

export default App;

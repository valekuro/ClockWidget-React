import "./App.css";
import Theme from "./components/Theme";

import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <Theme>
      <div className="App">
        <NavigationBar navigationItems={[<div>About</div>, <div>Services</div>, <div>Projects</div>]} logo={"Sunnyside"} variant={"light"} />
      </div>
    </Theme>
  );
}

export default App;

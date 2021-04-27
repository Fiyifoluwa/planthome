import React from "react";

import Planthome from "./components/Planthome";
import { Link, animateScroll as scroll } from "react-scroll";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Planthome></Planthome>
      </div>
    );
  }
}

export default App;

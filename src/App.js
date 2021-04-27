import React from "react";

import Planthome from "./components/Planthome";

class App extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    console.log("onclick..");
  };
  render() {
    return (
      <div className="App">
        <Planthome />
      </div>
    );
  }
}

export default App;

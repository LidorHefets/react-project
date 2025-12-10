// App.jsx – גרסת Class Component

import React, { Component } from "react";
import ServerLog from "./ServerLog.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogs: true
    };
  }

  toggleLogs = () => {
    this.setState((prevState) => ({
      showLogs: !prevState.showLogs
    }));
  };

  render() {
    const { showLogs } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h2>מערכת ניטור שרתים (Server Monitor)</h2>

        <button onClick={this.toggleLogs}>
          {showLogs ? "הסתר לוגים" : "הצג לוגים"}
        </button>

        {showLogs && <ServerLog />}
      </div>
    );
  }
}

export default App;

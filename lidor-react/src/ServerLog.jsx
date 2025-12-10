// ServerLog.jsx
// קומפוננטה המדמה לוגים משרת בזמן אמת

import React, { Component } from "react";

class ServerLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: []
    };

    this.intervalId = null;

    this.nextId = 1;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const newLog = {
        id: this.nextId,
        message: "Server Check OK",
        timestamp: timeString
      };

      this.nextId++;

      this.setState((prevState) => {
        return {
          logs: [...prevState.logs, newLog]
        };
      });

      console.log("נוסף לוג חדש:", newLog);
    }, 2000);
  }

  componentWillUnmount() {
    console.log("ServerLog יורדת מהמסך – עוצרים את הטיימר");

    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>Server Logs</h3>

        <ul>
          {this.state.logs.map((log) => (
            <li key={log.id}>
              <strong>{log.timestamp}</strong> - {log.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ServerLog;

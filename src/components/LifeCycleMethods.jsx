import React from "react";

class LifeCycleMethods extends React.Component {
  // 1- Creating component
  constructor(props) {
    console.log("Constructor is running...");
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 2- Component to DOM tree
  render() {
    console.log("Component rendered.");
    return (
      <div className="container text-center mt-5 pt-5">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <p className="text-danger">
          constructor(), render(), componentDidMount(), componentDidUpdate(),
          componentWillUnmount()
        </p>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-primary" onClick={this.increase}>
          INCREASE
        </button>
      </div>
    );
  }

  // 3- Mounting
  //* Called only 1 time in a lifecycle.
  componentDidMount() {
    // For example: data from api
    console.log("Component mounted.");
  }

  // 4- Updating (optional)
  componentDidUpdate() {
    console.log("Component updated");
  }

  // 5- Unmounting from DOM
  componentWillUnmount() {
    console.log("Component unmounted.");
  }
}

export default LifeCycleMethods;

import React, { Component } from "react";
import styles from "./index.module.css";

class FruitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mango: 0,
      banana: 0,
    };
  }

  handleIncreaseMango = () => {
    console.log("Mango is added...");
    this.setState((prevState) => ({ mango: prevState.mango + 1 }));
  };

  handleIncreaseBanana = () => {
    console.log("Banana is added....");
    this.setState((prevState) => ({ banana: prevState.banana + 1 }));
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.fruitsContainerWrapper}>
          <div className={styles.fruitsContainer}>
            <h1>
              Bob ate <span>{this.state.mango}</span> mangoes{" "}
              <span>{this.state.banana}</span> bananas
            </h1>
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button onClick={this.handleIncreaseMango}>Eat Mango</button>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button onClick={this.handleIncreaseBanana}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitsContainer;

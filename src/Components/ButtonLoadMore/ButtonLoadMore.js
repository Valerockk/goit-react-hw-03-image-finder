import React, { Component } from "react";
import styles from "./ButtonLoadMore.module.css";

export default class Button extends Component {
  handleFetchStart = () => {
    this.props.onFetch();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={this.handleFetchStart}
      >
        Load more
      </button>
    );
  }
}

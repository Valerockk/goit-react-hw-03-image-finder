import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey = (e) => {
    console.log(e.code);
    if (e.code !== "Escape") return;
    this.props.closeModal();
  };

  render() {
    const { closeModal, activeModalImg } = this.props;
    return (
      <div className={styles.Overlay} onClick={closeModal}>
        <div className={styles.Modal}>
          {!activeModalImg ? (
            <span>Sorry, but large image not found</span>
          ) : (
            <img src={activeModalImg} alt={activeModalImg} className={styles.ModalImg}/>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;

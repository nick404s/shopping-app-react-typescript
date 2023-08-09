import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
  onExit: () => void;
}

function Backdrop(props: BackdropProps): JSX.Element {
  return (
    <div 
      onClick={props.onExit}
      className={classes.backdrop}
    >
    </div>
  );
}

function ModalOverlay(props: any): JSX.Element {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

// get the element to render the modal into
const portal = document.getElementById('overlay') as HTMLElement;

function Modal(props: any): JSX.Element {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onExit={props.onExit} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
} 

export default Modal;
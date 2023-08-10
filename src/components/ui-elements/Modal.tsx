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

interface ModalOverlayProps {
  children: React.ReactNode;
}

function ModalOverlay(props: ModalOverlayProps): JSX.Element {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

interface ModalProps {
  onExit: () => void;
  children: React.ReactNode;
}

// get the element to render the modal into
const portal = document.getElementById('overlay') as HTMLElement;

function Modal(props: ModalProps): JSX.Element {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onExit={props.onExit} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
} 

export default Modal;
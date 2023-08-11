import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
  onExit: () => void;
}

/** 
 * Represents the backdrop ui component.
*/
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

/** 
 * Represents the modal overlay ui component.
*/
function ModalOverlay(props: ModalOverlayProps): JSX.Element {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}


// get the element to render the modal element into
const portal = document.getElementById('overlay') as HTMLElement;

interface ModalProps {
  onExit: () => void;
  children: React.ReactNode;
}

/** 
 * Represents the modal ui component.
*/
function Modal(props: ModalProps): JSX.Element {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onExit={props.onExit} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
} 

export default Modal;
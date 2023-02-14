import React from "react";
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
const Modal = (props) => {
    const Backdrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onClick} />
      };
    
      const ModalOverlay = (props) => {
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
      };

      return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdroop-root'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
        </React.Fragment>
      )
};

export default Modal;
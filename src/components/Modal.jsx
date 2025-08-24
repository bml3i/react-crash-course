import classes from './Modal.module.css';

function Modal({children, onCloseWindow}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onCloseWindow} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );

}

export default Modal;

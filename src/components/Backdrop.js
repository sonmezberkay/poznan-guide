import { useContext } from 'react';
import BackdropContext from './context/BackdropContext';
import classes from './Backdrop.module.css';

const Backdrop = () => {
    const backdropCtx = useContext(BackdropContext);
    const backdropToggle = backdropCtx.backdropToggle;

    return (
        <div onClick={backdropToggle} className={classes.backdrop}>

        </div>
    )
};

export default Backdrop;
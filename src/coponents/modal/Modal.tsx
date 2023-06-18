import Success from '../../assets/img/success.png'
import Error from '../../assets/img/error.png'
import Close from '../../assets/img/inputCleaner.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { modalAction } from './reduser';
import cn from 'classnames';
import classes from './modal.module.scss';

const Modal: React.FC = () => {
    const isOpen = useAppSelector(state => state.modal.isOpen);
    const isSuccess = useAppSelector(state => state.modal.isSuccess);
    const dispatch = useAppDispatch();

    const backToMainPage = () => {
        window.location.pathname = '/';
        dispatch(modalAction.setOpen(false));
    }

    const closeModalWindow = () => {
        dispatch(modalAction.setOpen(false))
    }

    return (
        <div className={cn(classes.modalWrapper, {
            [classes.open]: isOpen
        })}>
            <div className={classes.modal}>
                {isSuccess ? <h2>Форма успешно отправлена</h2>
                    : <div className={classes.errorTitleWrapper}>
                        <h2>Ошибка</h2>
                        <button
                            onClick={closeModalWindow}
                            className={classes.errorCloseButton}>
                            <img src={Close} alt="Закрыть модальное окно" />
                        </button>
                    </div>
                }
                <img src={isSuccess ? Success : Error} alt="Успешно" />
                {isSuccess ?
                    <button
                        className={classes.button}
                        onClick={backToMainPage}
                        id='button-to-main'
                    >На главную</button>
                    : <button
                        className={cn(classes.button, classes.errorButton)}
                        onClick={closeModalWindow}
                        id='button-close'
                    >Закрыть</button>
                }
            </div>
        </div>
    )
}
export default Modal;

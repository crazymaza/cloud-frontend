import classes from './stepper.module.scss';
import cn from 'classnames';

const Stepper: React.FC = () => {
    const currentPage = window.location.pathname;
    return (
        <div className={cn(classes.stepper, {
            [classes.half]: currentPage === '/second-step',
            [classes.full]: currentPage === '/third-step',
        })}>
            <div className={cn(classes.firstStep, {
                [classes.activeStep]: currentPage === '/first-step',
                [classes.completedStep]: currentPage !== '/first-step',
            })}></div>
            <div className={cn(classes.secondStep, {
                [classes.activeStep]: currentPage === '/second-step',
                [classes.completedStep]: currentPage === '/third-step',
            })}></div>
            <div className={cn(classes.thirdStep, {
                [classes.activeStep]: currentPage === '/third-step',
            })}></div>
        </div>
    );
}

export default Stepper;

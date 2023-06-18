import React from 'react';
import classes from './stepThree.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StepThreeInterface, stepThreeAction } from './reducer';
import { useNavigate } from 'react-router';
import Stepper from '../../common/stepper';
import cn from 'classnames';
import '../../index.scss';
import { sendFormValues } from '../../api/sendApi';


const StepThree: React.FC = React.forwardRef((_props, ref) => {
    const about = useAppSelector(state => state.stepThree.about);
    const secondStep = useAppSelector(state => state.stepTwo);
    const firstStep = useAppSelector(state => state.stepOne);
    const mainScreen = useAppSelector(state => state.mainScreen);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<StepThreeInterface>({ defaultValues: { about } });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const watchAbout = watch('about');

    const onSubmit: SubmitHandler<StepThreeInterface> = (data) => {
        dispatch(stepThreeAction.setFieldsValue(data));
        dispatch(sendFormValues({
            formData: { about: data.about, secondStep, firstStep, mainScreen }
        }))
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <main className={cn(classes.stepWrapper, 'app')}>
            <Stepper />
            <form
                name='StepThreeForm'
                className={classes.startForm}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <label htmlFor='about'>About</label>
                <textarea
                    className={classes.about}
                    id='field-about'
                    placeholder='Placeholder'
                    maxLength={200}
                    {...register('about', {
                        required: 'Обязательно для заполнения',
                    })}
                ></textarea>
                <span className={classes.maxLength}>{`${watchAbout.length} / 200`}</span>
                <span className={'error'}>{errors.about?.message}</span>
                <div className={classes.buttonsWrapper}>
                    <button
                        className={cn(classes.button, classes.transparentBtn)}
                        id='button-back'
                        onClick={goBack}
                    >
                        Назад
                    </button>
                    <button className={classes.button} id='button-send'>Отправить</button>
                </div>
            </form>
        </main >
    )
})

export default StepThree;

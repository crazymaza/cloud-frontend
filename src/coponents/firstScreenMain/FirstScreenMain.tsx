import React from 'react';
import classes from './firstScreenMain.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MainScreenInterface, mainScreenAction } from './reducer';
import { useNavigate } from 'react-router';
import { phoneReplace, unformatPhone } from './functions';
import InputBlock from '../../common/inputBlock';

const FirstScreenMain: React.FC = React.forwardRef((_props, ref) => {
    const phone = useAppSelector(state => state.mainScreen.phone);
    const email = useAppSelector(state => state.mainScreen.email);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, },
    } = useForm<MainScreenInterface>({ defaultValues: { phone: phoneReplace(phone), email } });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<MainScreenInterface> = (data) => {
        const { phone, email } = data;
        const phoneUnformat = unformatPhone(phone);
        dispatch(mainScreenAction.setFieldsValue({ phone: phoneUnformat, email }));
        navigate('/first-step');
    }

    const formatPhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const number = unformatPhone(value);
        setValue('phone', phoneReplace(number));
    }

    return (
        <main>
            <form
                name='mainScreenForm'
                className={classes.startForm}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <InputBlock
                    id={'phone'}
                    errorMessage={errors.phone?.message}
                    labelFor={'phone'}
                    placeholder={'+7 999 999-99-99'}
                    type={'tel'}
                    labelValue={'Номер телефона'}
                    maxLength={12}
                    register={register('phone', {
                        required: 'Обязятельно для заполнения',
                        pattern: {
                            value: /\d\s\(\d{3}\)\s\d{3}-\d{4}$/,
                            message: 'Неправильно набран номер'
                        },
                        onChange: formatPhoneNumber
                    })}
                    ref={ref}
                />
                <InputBlock
                    id={'email'}
                    errorMessage={errors.email?.message}
                    labelFor={'email'}
                    placeholder={'tim.jennings@example.com'}
                    type={'email'}
                    labelValue={'Email'}
                    register={register('email', {
                        required: 'Обязятельно для заполнения',
                        pattern: {
                            value: /(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
                            message: 'Неправильный формат почты'
                        }
                    })}
                    ref={ref}
                />
                <button className={classes.button} id='button-start'>Начать</button>
            </form>
        </main >
    )
})

export default FirstScreenMain;

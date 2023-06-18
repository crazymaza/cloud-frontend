import React from 'react';
import classes from './stepOne.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StepOneInterface, stepOneAction } from './reducer';
import { useNavigate } from 'react-router';
import InputBlock from '../../common/inputBlock';
import Stepper from '../../common/stepper';
import cn from 'classnames';
import '../../index.scss';
import Select, { components } from 'react-select';

const options = [
    { id: 'field-sex-option-man', value: 'man', label: 'man' },
    { id: 'field-sex-option-woman', value: 'woman', label: 'woman' }
]

const CustomOption = (props: any) => {
    return (
        <components.Option {...props}>
            <span id={props.data.id} key={props.innerProps.key}>
                {props.data.label}
            </span>
        </components.Option>
    );
};

const StepOne: React.FC = React.forwardRef((_props, ref) => {
    const nickname = useAppSelector(state => state.stepOne.nickname);
    const name = useAppSelector(state => state.stepOne.name);
    const sername = useAppSelector(state => state.stepOne.sername);
    const sexObj = useAppSelector(state => state.stepOne.sex);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, },
    } = useForm<StepOneInterface>({ defaultValues: { nickname, name, sername, sex: sexObj, } });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<StepOneInterface> = (data) => {
        dispatch(stepOneAction.setFieldsValue(data));
        navigate('/second-step');
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <main className={cn(classes.stepWrapper, 'app')}>
            <Stepper />
            <form
                name='StepOneForm'
                className={classes.startForm}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <InputBlock
                    id={'field-nickname'}
                    errorMessage={errors.nickname?.message}
                    labelFor={'nickname'}
                    placeholder={'Placeholder'}
                    type={'text'}
                    labelValue={'Nickname'}
                    maxLength={50}
                    register={register('nickname', {
                        required: 'Обязятельно для заполнения',
                        pattern: /^([a-zа-яёА-ЯA-Z]+|\d+)$/i
                    })}
                    ref={ref}
                    additionalClasses={'shortInput'}
                />
                <InputBlock
                    id={'field-name'}
                    errorMessage={errors.name?.message}
                    labelFor={'name'}
                    placeholder={'Placeholder'}
                    type={'text'}
                    labelValue={'Name'}
                    maxLength={50}
                    register={register('name', {
                        required: 'Обязятельно для заполнения',
                        pattern: {
                            value: /^([a-zа-яёА-ЯA-Z]+)$/i,
                            message: 'Ошибка проверки'
                        }
                    })}
                    ref={ref}
                    additionalClasses={'shortInput'}
                />
                <InputBlock
                    id={'field-sername'}
                    errorMessage={errors.sername?.message}
                    labelFor={'sername'}
                    placeholder={'Placeholder'}
                    type={'text'}
                    labelValue={'Sername'}
                    maxLength={50}
                    register={register('sername', {
                        required: 'Обязятельно для заполнения',
                        pattern: /^([a-zа-яёА-ЯA-Z]+)$/i
                    })}
                    ref={ref}
                    additionalClasses={'shortInput'}
                />
                <label className={'label'} htmlFor="field-sex">Sex</label>
                <Controller
                    control={control}
                    name={'sex'}
                    rules={{ required: 'Оязательно для заполнения' }}
                    render={({ field: { onChange, value, ref }, }) => (
                        <Select
                            styles={{
                                control: (baseStyles) => ({
                                    ...baseStyles,
                                    width: 300,
                                    height: 44,
                                }),
                                container: (baseStyles) => ({
                                    ...baseStyles,
                                    width: 300,
                                    height: 44,
                                }),
                                indicatorSeparator: () => ({
                                    display: 'none',
                                }),
                            }}
                            inputId='field-sex'
                            defaultValue={sexObj}
                            value={options.find(c => c.value === value?.value)}
                            options={options}
                            placeholder={'Не выбрано'}
                            onChange={onChange}
                            components={{
                                Option: CustomOption
                            }}
                            ref={ref}
                        />
                    )}
                />
                <span className={'error'}>{errors.sex?.message}</span>
                <div className={classes.buttonsWrapper}>
                    <button
                        className={cn(classes.button, classes.transparentBtn)}
                        id='button-back'
                        onClick={goBack}
                    >
                        Назад
                    </button>
                    <button className={classes.button} id='button-next'>Далее</button>
                </div>
            </form>
        </main >
    )
})

export default StepOne;

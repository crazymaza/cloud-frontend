import React, { useState } from 'react';
import classes from './stepTwo.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { stepTwoAction } from './reducer';
import { useNavigate } from 'react-router';
import InputBlock from '../../common/inputBlock';
import Stepper from '../../common/stepper';
import cn from 'classnames';
import '../../index.scss';
import Trashcan from '../../assets/img/trashcan.svg';

interface StepTwoInterface {
    [key: string]: string;
}

const StepTwo: React.FC = React.forwardRef((_props, ref) => {
    const {
        register,
        handleSubmit,
    } = useForm<StepTwoInterface>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [arrayLength, setArrayLength] = useState<number>(3);

    const onSubmit: SubmitHandler<StepTwoInterface> = (data) => {
        const advant = Object.keys(data).filter(key => key.includes('field-advatages'));
        const check = Object.keys(data).filter(key => key.includes('checkbox'));
        dispatch(stepTwoAction.setFieldsValue({
            advantages: advant.map(key => data[key]),
            checkbox: check.map(key => Number(data[key])),
            radio: Number(data?.radio)
        }));
        navigate('/third-step');
    }

    const goBack = () => {
        navigate(-1);
    }

    const fieldArray = new Array(arrayLength).fill(null);

    const addElement = () => {
        setArrayLength((prev) => prev + 1);
        fieldArray.push(null);
    }

    const removeElement = (elementId: number) => {
        fieldArray.splice(elementId, 1);
        setArrayLength((prev) => prev - 1);
    }

    return (
        <main className={cn(classes.stepWrapper, 'app')}>
            <Stepper />
            <form
                name='StepTwoForm'
                className={classes.startForm}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                {fieldArray.map((_, index) => {
                    return (
                        <div className={classes.inputWrapper} key={index}>
                            <InputBlock
                                id={`field-advatages-${index + 1}`}
                                errorMessage={''}
                                labelFor={`field-advatages-${index + 1}`}
                                placeholder={'Placeholder'}
                                type={'text'}
                                labelValue={index === 0 ? 'Advantages' : ''}
                                register={register(`field-advatages-${index + 1}`)}
                                ref={ref}
                                additionalClasses={cn('shortInput', classes.noError)}
                                key={`field-advatages-${index + 1}`}
                                hasError={false}
                            />
                            <button
                                className={classes.removeButton}
                                type='button'
                                title='Удалить'
                                onClick={() => removeElement(index)}
                            >
                                <img src={Trashcan} alt='Удалить' />
                            </button>
                        </div>
                    )
                })}

                <button
                    type='button'
                    title='Добавить'
                    className={classes.addButton}
                    onClick={addElement}
                >
                    +
                </button>

                <label className={cn('label', classes.checkboxes)} htmlFor="checkboxes">Checkbox group</label>
                <div>
                    {new Array(3).fill(null).map((_, index) => {
                        return (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    id={`field-checkbox-group-option-${index + 1}`}
                                    {...register(`field-checkbox-group-option-${index + 1}`)}
                                />
                                {index + 1}
                            </label>
                        )
                    })}
                </div>
                <label className={cn('label', classes.radioGroup)}>Radio group</label>
                <div>
                    {new Array(3).fill(null).map((_, index) => {
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    value={index + 1}
                                    id={`field-radio-group-option-${index + 1}`}
                                    {...register('radio')}
                                />
                                {index + 1}
                            </label>
                        )
                    })}
                </div>

                <div className={classes.buttonsWrapper}>
                    <button
                        className={cn(classes.button, classes.transparentBtn)}
                        id='button-back'
                        onClick={goBack}
                    >
                        Back
                    </button>
                    <button className={classes.button} id='button-next'>Далее</button>
                </div>
            </form>
        </main >
    )
})

export default StepTwo;

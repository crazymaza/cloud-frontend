import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import classes from './input.module.scss';
import InputCleaner from '../../assets/img/inputCleaner.svg';
import { ChangeEvent, useState } from 'react';
import { phoneReplace } from '../../coponents/firstScreenMain/functions';
import cn from 'classnames';
import React from 'react';

interface InputInterface {
    [key: string]: unknown;
    id: string;
    errorMessage: string | undefined;
    labelFor: string;
    placeholder: string;
    type: string;
    labelValue: string;
    register: UseFormRegisterReturn<any>;
    additionalClasses?: string | string[];
    hasError?: boolean;
}

const InputBlock: React.FC<InputInterface> = React.memo(({
    id,
    errorMessage,
    labelFor,
    placeholder,
    type,
    labelValue,
    register,
    additionalClasses,
    hasError = true,
    ...props
}) => {
    const [value, setValue] = useState<string>('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(labelFor === 'phone' ? phoneReplace(event.target.value) : event.target.value)
    }

    const clearInput = () => {
        setValue('');
    }

    return (
        <div className={classes.labelWithInput}>
            <label htmlFor={labelFor} className={classes.formLabel}>
                {labelValue}
            </label>
            <div className={classes.inputWrapper}>
                <input
                    id={id}
                    className={cn(classes.formInput, additionalClasses)}
                    type={type}
                    placeholder={placeholder}
                    {...register}
                    {...props}
                    value={value}
                    onChange={changeValue}
                />

                <button
                    aria-label={labelFor}
                    className={cn(classes.cleanButton, {
                        [classes['visually-hidden']]: !value,
                    })}
                    onClick={clearInput}
                    type='button'
                    title='Очистить поле'
                >
                    <img src={InputCleaner} alt="Очистить поле" />
                </button>

            </div>
            {hasError && <span className={classes.error}>{errorMessage}</span>}
        </div>
    );
})

export default InputBlock;

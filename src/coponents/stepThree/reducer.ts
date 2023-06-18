import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface StepThreeInterface {
    about: string;
}

const initialState: StepThreeInterface = {
    about: '',
}

const stepThree = createSlice({
    name: 'stepThree',
    initialState,
    reducers: {
        setFieldsValue: (_state: StepThreeInterface, { payload }: PayloadAction<StepThreeInterface>) => {
            return { ...payload }
        }
    }

})

export const stepThreeAction = stepThree.actions;
export default stepThree.reducer;

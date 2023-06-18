import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface StepTwoInterface {
    advantages: string[];
    checkbox: number[];
    radio: number | null;
}

const initialState: StepTwoInterface = {
    advantages: [],
    checkbox: [],
    radio: null,
}

const stepTwo = createSlice({
    name: 'stepTwo',
    initialState,
    reducers: {
        setFieldsValue: (_state: StepTwoInterface, { payload }: PayloadAction<StepTwoInterface>) => {
            return { ...payload }
        }
    }

})

export const stepTwoAction = stepTwo.actions;
export default stepTwo.reducer;

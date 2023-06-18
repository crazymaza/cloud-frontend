import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface StepOneInterface {
    nickname: string,
    name: string,
    sername: string,
    sex: {id: string, value: string, label: string} | null,
}

const initialState: StepOneInterface = {
    nickname: '',
    name: '',
    sername: '',
    sex: null,
}

const stepOne = createSlice({
    name: 'stepOne',
    initialState,
    reducers: {
        setFieldsValue: (_state: StepOneInterface, { payload }: PayloadAction<StepOneInterface>) => {
            return { ...payload }
        }
    }

})

export const stepOneAction = stepOne.actions;
export default stepOne.reducer;

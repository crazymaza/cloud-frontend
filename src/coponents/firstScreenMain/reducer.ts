import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MainScreenInterface {
    phone: string,
    email: string,
}

const initialState: MainScreenInterface = {
    phone: '',
    email: '',
}

const mainScreen = createSlice({
    name: 'mainScreen',
    initialState,
    reducers: {
        setFieldsValue: (_state: MainScreenInterface, { payload }: PayloadAction<MainScreenInterface>) => {
            return { ...payload }
        }
    }

})

export const mainScreenAction = mainScreen.actions;
export default mainScreen.reducer;

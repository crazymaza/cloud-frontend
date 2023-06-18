import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sendFormValues } from "../../api/sendApi";

export interface ModalInterface {
    isOpen: boolean;
    isSuccess: boolean;
}

const initialState: ModalInterface = {
    isOpen: false,
    isSuccess: true,
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpen: (state: ModalInterface, { payload }: PayloadAction<ModalInterface['isOpen']>) => {
            state.isOpen = payload;
        },
        setStatus: (state: ModalInterface, { payload }: PayloadAction<ModalInterface['isSuccess']>) => {
            state.isSuccess = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendFormValues.fulfilled, (state) => {
            state.isSuccess = true;
            state.isOpen = true;
        })
        builder.addCase(sendFormValues.rejected, (state) => {
            state.isOpen = true;
            state.isSuccess = false;
        })
    }

})

export const modalAction = modalReducer.actions;
export default modalReducer.reducer;

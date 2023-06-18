import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendFormValues = createAsyncThunk(
    'user/getFormData',
    async (formData: { [key: string]: unknown }) => {
        const response = await fetch(`https://api.sbercloud.ru/content/v1/bootcamp/frontend`, {
            method: 'POST',
            body: JSON.stringify(formData),
        })
        return (await response.json())
    }
)

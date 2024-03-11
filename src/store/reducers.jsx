/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formData: {
        isId: '',
        isTitle: '',
        isText: '',
    },
    saveList: [],
}

const appSlice = createSlice({
    name: 'noteInfo',
    initialState,
    reducers: {
        setIsForm(state, action) {
            const { id, title, text } = action.payload
            state.formData = { id, title, text }
        },
        setSaveList(state, action) {
            state.saveList = action.payload
        },
    },
})

export const { setIsForm, setSaveList } = appSlice.actions
export default appSlice.reducer

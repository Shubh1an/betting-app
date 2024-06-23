import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
    name: 'common',
    initialState: {
        isLoade: false,
    },
    reducers: {
        setIsLoader: (state, { payload }) => {
            state.isLoade = payload
        },
    }
})

export const { setIsLoader } = commonSlice.actions

export default commonSlice.reducer
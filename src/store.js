import { createSlice, configureStore, current } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {
        add: (state, action) => {
            console.log("testttt", state.data)
            const data = current(state.data)
            state.data = [...data, { id: data.length + 1, product: "" }]
        },
        remove: (state, action) => {
            const data = current(state.data)
            const id = action.payload

            state.data = data.filter((el) => el.id != id)
        },
        change: (state, action) => {
            const data = current(state.data)
            const id = action.payload.id
            const product = action.payload.id
            state.data = data.map((el) => el.id == id ? ({ ...el, product: product }) : el)
        }
    }
})

export const { add, remove, change } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})


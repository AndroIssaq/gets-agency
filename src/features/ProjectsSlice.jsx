import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects:[]
}

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state,action) => {
        state.projects= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProjects } = projectSlice.actions

export default projectSlice.reducer
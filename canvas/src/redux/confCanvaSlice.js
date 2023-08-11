import { createSlice } from "@reduxjs/toolkit";

const initialState={
    brushColor:'',
    brushRadius:0
}

export const confCanvaSlice = createSlice({
    name: 'confCanva',
    initialState,
    reducers: {
        addConfCanva: (state,action) =>{
            const {brushColor, brushRadius} = action.payload;
            state.brushColor=brushColor; 
            state.brushRadius=brushRadius;
        },
        changeBrushColor: (state,action)=>{
            state.brushColor=action.payload;
        },
        changeBrushRadius: (state,action) =>{
            state.brushRadius=action.payload;
        }
    }
})

//exportamos los reducers del slice
export const {addConfCanva,changeBrushColor,changeBrushRadius} =confCanvaSlice.actions;
export default confCanvaSlice.reducer;
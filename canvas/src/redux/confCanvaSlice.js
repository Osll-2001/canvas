import { createSlice } from "@reduxjs/toolkit";

const initialState={
    brushColor:'',
    brushRadius:0,
    imageBackground:''
}

export const confCanvaSlice = createSlice({
    name: 'confCanva',
    initialState,
    reducers: {
        addConfCanva: (state,action) =>{
            const {brushColor, brushRadius,imageBackground} = action.payload;
            state.brushColor=brushColor; 
            state.brushRadius=brushRadius;
            state.imageBackground=imageBackground;
        },
        changeBrushColor: (state,action)=>{
            state.brushColor=action.payload;
        },
        changeBrushRadius: (state,action) =>{
            state.brushRadius=action.payload;
        },
        changeImageBackground: (state,action)=>{
            state.imageBackground=action.payload;
        }
    }
})

//exportamos los reducers del slice
export const {addConfCanva,changeBrushColor,changeBrushRadius,changeImageBackground} =confCanvaSlice.actions;
export default confCanvaSlice.reducer;
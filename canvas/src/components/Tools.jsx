import { useSelector, useDispatch } from "react-redux"
import { changeBrushColor } from "../redux/confCanvaSlice"

const Tools = () => {

  const dispatch=useDispatch();
  const brushColor=useSelector((state)=>state.confCanva.brushColor);

  const handleChange = (e)=>{
    dispatch(changeBrushColor(e.target.value))
  }

  return (
    <div className='toolsMenu'>
      <input type="color" value={brushColor} onChange={handleChange}/>
    </div>
  )
}

export default Tools
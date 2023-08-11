import { useSelector, useDispatch } from "react-redux"
import { changeBrushColor, changeBrushRadius } from "../redux/confCanvaSlice"
import '../styles/App.scss';

const Tools = () => {

  const dispatch=useDispatch();
  const {brushColor,brushRadius}=useSelector((state)=>state.confCanva);

  const handleChangeColor = (e)=>{
    dispatch(changeBrushColor(e.target.value))
  }
  const handleChangeRadius = (e)=>{
    dispatch(changeBrushRadius(e.target.value))
  }

  return (
    <section className='toolsMenu'>
      <h1>Configuraciones</h1>
      <div className="elementMenu">
        <h3>Color Pincel</h3>
        <input type="color" value={brushColor} onChange={handleChangeColor}/>
      </div>
      <div className="elementMenu">
        <h3>Tamaño pincel</h3>
        <input type="range" value={brushRadius} onChange={handleChangeRadius}/>
        <p className="rangeConf">{brushRadius}</p>
      </div>
    </section>
  )
}

export default Tools
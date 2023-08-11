import CanvasDraw from 'react-canvas-draw'
import '../App.css'
import { useSelector } from 'react-redux'

const Canvas = () => {

  const confCanva=useSelector((state)=> state.confCanva);

  return (
    <CanvasDraw canvasHeight={window.innerHeight-300} canvasWidth={window.innerWidth-300} brushColor={confCanva.brushColor}/>
  )
}

export default Canvas
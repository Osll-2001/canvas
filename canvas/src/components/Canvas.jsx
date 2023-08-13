import CanvasDraw from 'react-canvas-draw'
import '../styles/App.scss'
import { useSelector } from 'react-redux'

const Canvas = () => {

  const confCanva=useSelector((state)=> state.confCanva);

  return (
    <section className='pincel'>
    <CanvasDraw id='canvas' imgSrc={confCanva.imageBackground} canvasHeight={(window.innerHeight-0)} canvasWidth={(window.innerWidth-(window.innerWidth*.20))} brushColor={confCanva.brushColor} brushRadius={confCanva.brushRadius}/>
    </section>
  )
}

export default Canvas
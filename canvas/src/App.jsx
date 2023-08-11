import { useDispatch } from 'react-redux'
import './styles/App.scss'
import Canvas from './components/Canvas'
import Tools from './components/Tools'
import { useEffect } from 'react';
import { addConfCanva } from './redux/confCanvaSlice';

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    const configure={brushColor:"#444", brushRadius:10};
    dispatch(addConfCanva(configure));
  },[])

  return (
    <>
      <Canvas />
      <Tools />
    </>
  )
}

export default App
